import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome from expo/vector-icons
import axios from 'axios';
import localhost from '../../confix';
import Notification from '../Screen/Notificationpell'




const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:10,
    justifyContent: "space-between",
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // paddingVertical: 10,
    // paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain' // Adjust the resizeMode as needed
  },
});

function AgriNotification({navigation}) {

   
   const [sell, setsell] = useState([]);
   const [free, setfree] = useState([]);
   useEffect(() => {
    axios.get(`http://${localhost}/api/v1/sell`)
        .then(res => {
            
            setsell(res.data.data.sell)
        })
        .catch(error => 
        console.log("hello",error) );
}, []);
  
useEffect(() => {
  axios.get(`http://${localhost}/api/v1/free`)
      .then(res => {
          
          setfree(res.data.data.free)
      })
      .catch(error => 
      console.log("hello",error) );
}, []);

  const renderItem = ({ item }) => (
    <View>
    <View style={styles.container} key={item.title}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri:item.image}} style={styles.image} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "800", lineHeight: 20, color: 'black' }}>{item.title}</Text>
          <Text style={{ fontSize: 15, fontWeight: "300", lineHeight: 20, color: 'black' }}>{item.phoneNumber}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:15,color:"black",fontWeight:"500"}}>rightNow {item.date}</Text>
        <View style={{flexDirection:"row",}}>
        <FontAwesome name='check' size={20} color="green" />
        <FontAwesome name='check' size={20} color="green" />
        </View>
        
      </View>
    </View>
    <Text  style={{
     marginBottom:2,
     borderBottomWidth: 2,
     borderBottomColor: '#ccc'
  }}>

  </Text>
    </View>
  );

  return (
 <View style={{flex:1}}>
    <View style={{backgroundColor:"orange",  }}>
    <View style={{  flexDirection: "row", paddingHorizontal: 20,marginTop: 40,gap:20 }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>Notification</Text>
    </View>
    <View style={{marginTop:10}}>

    </View>
    </View>
  <View style={{marginTop:10}}>
  <FlatList
      data={sell}
      renderItem={renderItem}
      keyExtractor={item => item.title.toString()}
    />
    
  </View>
  <FlatList
   data={free}
   renderItem={renderItem}
   keyExtractor={item => item.title.toString()}
   />
    
    </View>
  );
};

export default AgriNotification



