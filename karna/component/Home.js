import React from 'react';
import { useState, useContext,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Context from './Screen/Context';
import localhost from '../confix';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
function Home({navigation}) {
  const {user}=useContext(Context)
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  

  const closeModal = () => {
    setModalVisible(false);
  };
  const [userData, setUserData] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
       
        if (!token) {
          console.log('Token not found');
          return;
        }
        const response = await axios.get(`${localhost}/api/v1/userdata`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      
        if (response.data.status === 'success') {
          // Check if user object is defined before accessing its properties
          if (response.data.data.user) {
      
            setUserData(response.data.data.user);
  
          } 
        } else {
          console.error('Failed to fetch user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error occurred while fetching user data:', error);
      }
    };
  
    fetchData();
  }, []);
  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white"}}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20,marginTop: 40 }}>
      <TouchableOpacity onPress={openModal}>
        <FontAwesome name="bars" size={28} color="orange" />
        </TouchableOpacity>
        <Text style={{ color: "orange", fontSize: 28, fontWeight: "bold" }}> KARNA</Text>
        <View>
        <TouchableOpacity>
 <View style={styles.catg}>
 
 <Image source={{ uri: userData?.image }}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
        
        </View>
        
      </View>
      <View style={styles.maincont}>
        <TouchableOpacity onPress={() => navigation.navigate("donarPage")}>
          <View style={styles.container}>
            <Image source={require("../assets/donar.png")} style={styles.image} />
            <Text style={styles.text}>DONOR</Text>
          </View>
        </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("reciver")}>
        <View style={styles.container}>
          <Image source={require("../assets/reciver.jpg")} style={styles.image} />
          <Text style={styles.text}>Receiver</Text>
        </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
        <View style={styles.details}>
    
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="user" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Become a Food Waste Hero</Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
  </TouchableOpacity>
  
  {/* sell */}
  <TouchableOpacity onPress={() => navigation.navigate("meta")}>
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="upload" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Also from meta</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:5}}></Text>
      </View>
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
  </TouchableOpacity>

  {/* help */}
  <TouchableOpacity onPress={() => navigation.navigate("hlep")}>
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="info" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Help & support</Text>
      
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
  </TouchableOpacity>

  {/* notification */}
  <TouchableOpacity onPress={() => navigation.navigate("notifi")}>
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="bell" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Notification</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:10}}></Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" onPress={() => navigation.navigate("notifi")}/>
    </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("karnafeature")}>
  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      <FontAwesome name="language" size={30} color="green" />
      <View>
      <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5 }}>Karna_Feature</Text>
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:5}}></Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>
</TouchableOpacity>

  <View style={styles.details}>
    <View style={{flexDirection: "row"}}>
      
      <View>
    { {user}?<Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold",textAlign:"left",marginLeft:5, color:"red" }} onPress={()=>navigation.goBack()}>LogOut</Text>:null}
      <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold",marginLeft:5}}></Text>
      </View>
      
    </View>
    <View>
      <FontAwesome name="chevron-right" size={20} color="black" />
    </View>
  </View>

        <View style={{marginTop:20}}>
        <Button title="Close" onPress={closeModal} color="orange" />
        </View>
          
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 290,
    height: 290,
    borderRadius: 63,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: 150,
    height: 130,
    resizeMode: "contain",
  },
  text: {
    marginTop: 10,
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: 340,
    height: '90%',
    alignSelf: 'center',
    marginTop: '30%',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  catg: {
    width:40,
    height: 40,
     color: "black",
      backgroundColor: "white",
       borderRadius:50 , 
       backgroundColor: "white",
       alignItems: "center",
       justifyContent: "center",
       shadowColor: 'black',
   shadowOffset: {
     width: 35,
     height: 35,
   },
   shadowOpacity: 0.5,
   shadowRadius: 15,
   elevation: 5,
},
}
)

export default Home;
