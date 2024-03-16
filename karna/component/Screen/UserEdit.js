import React from 'react'
import { useState } from 'react';
import {View, Text, TouchableOpacity, Image, Button, StyleSheet, TextInput, Pressable} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import localhost from '../../confix';
import AsyncStorage from '@react-native-async-storage/async-storage';
function UserEdit({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role,setrole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  

  //set the user data
  const updateData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log("token is", token);
      if (!token) {
        console.log('Token not found');
        return;
      }
      const response = await axios.patch(`${localhost}/api/v1/updateMe`, {
        name:name,
        email:email,
        role:role,
        phoneNumber:phoneNumber
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);

      // alert('Success', 'User data updated successfully.');
      // console.log("hello",name);
       if (response.data.status === 'success') {
              navigation.navigate("user");
       } 
    } catch (error) {
      console.error('Error occurred while updating user data:', error);
    }
  };
  



  return (
    <View style={{flex:1}}>
       <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Editpage</Text>
    
    </View>
    <View style={{marginTop:15}}>

    </View>
    </View>
    <View style={{marginTop:10,flex:1}}>
     <View style={{alignItems:"center",alignContent:"center"}}>
      <View style={{width:90,height:90,borderRadius:90,backgroundColor:"pink",alignItems:"center"}}>
        <Image source={require("../../assets/donar.png")} style={{width:80,height:80,resizeMode:"contain"}}/>
      </View>
      <View style={{marginTop:10,}}>
      <Button title='Change' color="orange" />

      </View>
      
     </View>

     <View style={{ flex: 1, }}>
 <View style={{}}>

 <Text style={{fontSize:18,marginLeft:10}}>Name</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15, }}>
        <Ionicons name="person-circle-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       
        <TextInput
          placeholder='Name'
          style={{flex: 1, paddingVertical: 0 }}
          value={name}
          onChangeText={text => setName(text)}
        />
      
      </View>
      </View>

      <View style={{}}>

<Text style={{fontSize:18,marginLeft:10}}>Email</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
       <Ionicons name="at-circle-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       <TextInput
         placeholder="Email"
         style={{ flex: 1, paddingVertical: 0 }}
         keyboardType="email-address"
         value={email}
         onChangeText={(text) => setEmail(text)}
       />
     </View>
     </View>
        
     <View style={{}}>

<Text style={{fontSize:18,marginLeft:10}}>Role</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
       <Ionicons name="people-circle-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       <TextInput
          placeholder='Role'
          style={{ flex: 1, paddingVertical: 0 }}
          value={role}
          onChangeText={text => setrole(text)}
        />
     </View>
     </View>
     <View style={{}}>

<Text style={{fontSize:18,marginLeft:10}}>PhoneNumber</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
       <Ionicons name="call-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
        
       <TextInput
          placeholder='PhoneNumber'
          style={{ flex: 1, paddingVertical: 0 }}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
     </View>
     </View>
        
        
   
  <View style={{marginTop: 5,alignItems:"center",justifyContent:"center",}}>
   <Button title='   Save   'color="orange" onPress={updateData}/>
  </View>
   
  <View style={{marginTop: 5,alignItems:"center",justifyContent:"center",}}>
   <Button title=' Cancel  'color="black" onPress={() => navigation.goBack()} />
  </View>

        <View>
         
        </View>

      </View>
    </View>


{/* formpage */}



    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 5,
    width: 270,
    height: 40,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    paddingVertical: 0,
    padding: 10,
    textAlign: "justify",
  }
});

export default UserEdit
