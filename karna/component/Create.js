

import React, { useState, useEffect } from 'react';
import { View, Button, Modal, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import Picker from 'react-native-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Agricultureadd from './Screen/Agricultureadd';
import axios from 'axios';
import localhost from '../confix';
import Notificationpell from './Screen/Notificationpell';

function Create({navigation}) {
  

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3 * 60 * 1000); // 3 minutes in milliseconds

    // Clean up function to clear the timer when the component unmounts or modal is closed manually
    return () => clearTimeout(timer);
  }, []);



  const [product,setproduct] = useState([]);
    
  useEffect(() => {
      axios.get(`http://${localhost}/api/v1/sell`)
          .then(res => {
              
              setproduct(res.data.data.sell)
          })
          .catch(error => 
          console.log("hello",error) );
  }, []);


  const renderItem = ({ item }) => {
     
    // console.log(item)
    return (

        <View style={styles.cardContainer} key={item.title}>
         <TouchableOpacity style={styles.icon} >
         <FontAwesome name='heart' size={24} color="red" />
                </TouchableOpacity>
            <Image source={{ uri:item.image}} style={styles.image}  />
            <Text style={styles.title} onPress={() => navigation.navigate("display",{item})}>{item.title}</Text>
            <Text style={styles.author} onPress={() => navigation.navigate("display", {item})} >{item.desc} </Text>
            <View style={{flexDirection:'row'}}>
            <FontAwesome name="star" size={20} color="yellow" />
            <FontAwesome name="star" size={20} color="yellow" />
            <FontAwesome name="star" size={20} color="yellow" />
            <FontAwesome name="star" size={20} color="yellow" />
  
            </View>
            
        </View>
      
    );
  };
  return (
   <View style={{flex:1}}>
   <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
   <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20, marginTop:40 }}>
      <TouchableOpacity onPress={openModal}>
        <FontAwesome name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>Agriculture</Text>
        <TouchableOpacity onPress={() => navigation.navigate("notify")}>
          <Notificationpell notificationCount={5} />
          </TouchableOpacity>
      </View>
      <View style={{marginTop:20}}>
      </View>
</View>
{/* catgoery */}
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Category</Text>
        <TouchableOpacity onPress={() => navigation.navigate("list")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
      <TouchableOpacity>
        <View style={styles.categoryItem}>
          <Image source={require("../assets/ve.png")} style={styles.categoryImage} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.categoryItem}>
          <Image source={require("../assets/j.png")} style={styles.categoryImage} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.categoryItem}>
          <Image source={require("../assets/ss.png")} style={styles.categoryImage} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.categoryItem}>
          <Image source={require("../assets/pp.png")} style={styles.categoryImage} />
        </View>
        </TouchableOpacity>
      </View>
    </View>

    {/* special offer  */}
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerText}>Special Offer</Text>
        <TouchableOpacity onPress={() => console.log('See All pressed')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
       <View style={{marginTop:10}}>
        <Agricultureadd />
       </View>
      </View>
{/*      
     agriculture image recent */}
     <View style={{marginTop:10}}>
     <View style={styles.header}>
        <Text style={styles.headerText}>Top List</Text>
        <TouchableOpacity onPress={() => navigation.navigate("product")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
      <FlatList
                data={product}
                keyExtractor={(item) => item.title.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                horizontal={false}
                numColumns={2}
                
            /> 
      </View>

     </View>
       
     <View>
       
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
        {/* free */}
        <TouchableOpacity onPress={() => navigation.navigate("entersellpage")}>
        <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="heart" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Sell</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:5}}>Selling Agriculture Product</Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
  </TouchableOpacity>
  
  {/* sell */}
  <TouchableOpacity onPress={() => navigation.navigate("freepage")}>
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="upload" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Free</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:5}}>give aways free paddy</Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
  </TouchableOpacity>

  {/* help */}
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="info" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:10 }}>Help</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:10}}>Text me any help</Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
       <View style={{marginTop:30}}>

          <Button title="Close" onPress={closeModal} color="orange" />
          </View>
        </View>
       </Modal>
     </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    
    height: '90%',
    alignSelf: 'center',
    marginTop: '60%',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", // Change color as needed
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  categoryItem: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    height: 40,
    width: 40,
    resizeMode: "center",
  },
  listContainer: {
    padding: 10,
    height:"10000%",
  
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    // marginHorizontal: 10,
    alignSelf:"flex-end"
  },
  details :{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
     width: 330,
     height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    margin: 5,
    paddingHorizontal:20,
    marginTop:20
    

  },
  line: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10 // Adjust margin as needed
  },
});


export default Create
