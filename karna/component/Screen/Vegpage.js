import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import localhost from '../../confix';

function Vegpage({navigation}) {

  const [veg,setveg] = useState([]);

useEffect(() => {
    axios.get(`http://${localhost}/api/v1/veg`)
        .then(res => {
          console.log("food",veg)
            setveg(res.data.data.veg)
        })
        .catch(error => 
        console.log("hello",error) );
}, []);

const renderveg = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius: 20 }} key={item.name}>
        <Image source={{uri:item.image}} style={{ width: 200, height: 200, marginRight: 10 }} />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }} onPress={()=> navigation.navigate("showreciver")}>{item.foodname}</Text>
          <Text style={{ fontSize: 16,fontWeight:"500" }}>{item.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.hotel}</Text>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.location}</Text>
          <View style={styles.catg1}>
  <Text style={{ fontSize: 18, fontWeight: '500', padding: 8, marginLeft: 4, textAlign: 'center', alignSelf: 'center' }}>View</Text>
</View>

        </View>
      </View>




  )
}


  return (
    <View style={{flex:1}}>
          <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Vegetarian</Text>
    
    </View>
    <View style={{marginTop:10}}>

    </View>
    </View>
    <View style={{marginTop:15}}>
       <View>
        <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginLeft:20}}> Food Type</Text>
        <View style={{flexDirection:"row",justifyContent:"space-around",paddingHorizontal:10,marginTop:10}}>
 <TouchableOpacity>
 <View style={styles.catg}>
    <Text style={{ fontSize: 15, fontWeight: "300", color: 'black', textAlign: "center",alignSelf:"center", padding:8 }} >Falafels</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.catg}>
    <Text style={{ fontSize: 15, fontWeight: "300", color: 'black', textAlign: "center",alignSelf:"center", padding:8 }}>Broccoli</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
   <View style={styles.catg}>
    <Text style={{ fontSize: 15, fontWeight: "300", color: 'black', textAlign: "center",alignSelf:"center", padding:8 }}>Spinach</Text>
  </View> 
  </TouchableOpacity>
 </View>
 {/* first line */}
 {/* second line */}
 <View style={{flexDirection:"row",paddingHorizontal:14,marginTop:5}}>
 <TouchableOpacity>
 <View style={styles.catg}>
    <Text style={{ fontSize: 15, fontWeight: "300", color: 'black', textAlign: "center",alignSelf:"center", padding:8 }} >Eggplant</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.catg}>
    <Text style={{ fontSize: 15, fontWeight: "300", color: 'black', textAlign: "center",alignSelf:"center", padding:8 }}>Artichok</Text>
  </View>
  </TouchableOpacity>
  
 </View>
      
   
 


 <View>
    <FlatList 
        data={veg}
        keyExtractor={ item => item.name.toString()}
        renderItem={renderveg}
    />
    </View>
    </View>
    </View>
    </View>
  )
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
    width: 300,
    height: 300,
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
  catg: {
     width:100,
     height: 37,
      color: "black",
       backgroundColor: "white",
        borderRadius: 20, 
        alignContent: "center", 
        margin:5 ,
        shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
 },
 catg1: {
  width: 80,
  height: 37,
  color: 'black',
  backgroundColor: 'orange',
  borderRadius: 20,
  marginRight: 10,
  marginTop: 30,
  alignItems: 'center', // Aligns children components horizontally
  justifyContent: 'center', // Aligns children components vertically
  margin: 5,
  shadowColor: 'black',
  shadowOffset: {
    width: 35,
    height: 35,
  },
  shadowOpacity: 0.5,
  shadowRadius: 15,
  elevation: 5,
}


})

export default Vegpage
