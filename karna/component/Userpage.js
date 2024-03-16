import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Addshowing from './Screen/Addshowing';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';
import localhost from '../confix';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Userpage({navigation}) {

 // Import AsyncStorage
// Your component code
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




//delete the acount


const deleteUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log("token is", token);
    if (!token) {
      console.log('Token not found');
      return;
    }
    const response = await axios.delete(`${localhost}/api/v1//DeleteMe`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data.status === 'success') {
      console.log('User deleted successfully');
      return navigation.navigate("Login");
    } 
  } catch (error) {
    console.error('Error occurred while deleting user:', error);
  }
};

  return (
     <ScrollView style={{backgroundColor:"white"}}>
     <LinearGradient colors={['orange', 'white', 'white']}>
    <View style={{flex:1,borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
         <View style={{ flex: 1, marginTop: 50, }}>
           <View style={{flexDirection: 'row', paddingHorizontal: 20, }}>
         <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', flex:1, }}><FontAwesome name="chevron-down" size={20} color="black" /> {userData.name} </Text>
        <FontAwesome name="heart" size={30} color="red" />
      </View>   
      {/* user data */}
      <View style={{ alignItems: 'center',margin:10 }}>
        <View style={styles.container}>
          <View >
          
          <Image source={{ uri: userData?.image }}  style={{width:60,height:60,borderRadius:60,resizeMode:"center"}}  />
            <Text>{userData.name}</Text>
            
          </View>
          <View>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{userData.name}</Text>
            <Text style={{ fontSize: 14, color: 'black', fontWeight: '300' }}>{userData.email} </Text>
            <Text style={{ fontSize: 14, color: 'black', fontWeight: '300' }}>{userData.role}</Text>
          </View>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between",}}>
          <TouchableOpacity onPress={() => navigation.navigate("edit")}>
          <View style={{ width: 130, height: 37, color: "black", backgroundColor: "black", borderRadius: 20, alignContent: "center", margin:5 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white', textAlign: "center", marginTop: 10 }}>Edit Profile</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("expoler",{userData})}>
          <View style={{ width: 130, height: 37, color: "black", backgroundColor: "black", borderRadius: 20, alignContent: "center",margin:5  }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white', textAlign: "center", marginTop: 10 }}>View Details</Text>
          </View>
          </TouchableOpacity>
          <View style={{ width: 50, height: 40, color: "black", borderRadius: 20, alignContent: "center",margin:7 }}>
          <FontAwesome name="heart" size={30} color="green" />
          </View>
        </View>
    </View>
      </View>
      </View>
      
<View style={{flex:4,backgroundColor:"white",marginBottom:20,}}>
      {/* add rendering part */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Addshowing />
      </View>
    
      
      <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={() =>navigation.navigate("terms")}>
        <View style={styles.details}>
        
          <View style={{flexDirection:"row"}}>
          <FontAwesome name="info" size={30} color="green" />
          <Text style={{textAlign:"center",fontSize:18,fontWeight:"bold",marginLeft:20}}>Terms and condtions</Text>
          </View>
          <View>
          <FontAwesome name="chevron-right" size={20} color="black" />
          </View>
          
        </View>
        </TouchableOpacity>
      </View>
      
{/*       
      <TouchableOpacity style={{height:50,backgroundColor:"white"}} onPress={()=>navigation.navigate(userData ? "login" : "notlogin")}>
  <Text style={{color:"red",fontSize:20,backgroundColor:"white", marginLeft:30}}>
    {userData ? "Logout" : "Login"}
  </Text>
</TouchableOpacity> */}
      </View>
      {/* <View style={{backgroundColor:"white"}}>

      </View> */}
      
      </LinearGradient>
    

   
</ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
     width: 300,
     height: 100,
    margin: 5,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  details :{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
     width: 350,
     height: 45,
    borderRadius: 20,
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
    width:65,
    height: 65,
     color: "black",
      backgroundColor: "white",
       borderRadius:65 , 
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

});

export default Userpage;
