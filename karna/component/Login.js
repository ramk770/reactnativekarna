import React, { useState, useContext } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View,  } from 'react-native';
import axios from 'axios';
import localhost from '../confix';
import Context from './Screen/Context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Login({ navigation }) {
 
  
   const [email,setEmail]  = useState('');
   const [password, setPassword] = useState('');
   const {user,setuser}=useContext(Context)

   // Import AsyncStorage

const handlesubmit = async () => {
  if (!email || !password) {
    alert('Error: Please enter both email and password.');
    return;
  }

  try {
    const response = await axios.post(`http://${localhost}/api/v1/login`, {
      email: email,
      password: password
    });

    if (response.data.status === 'success') {
      const { token } = response.data;
      setuser({ user: response.data.data.user.name, email: response.data.data.user.email });
      navigation.navigate('stack', { email });
      await AsyncStorage.setItem('token', token); // Use AsyncStorage here
    } else {
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    alert('Error occurred during login: ' + error.message);
  }
};

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/Image.png")}
          style={{ width: 170, height: 130, resizeMode: "contain" }} />
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "black" }} >Welcome Back</Text>
      </View> 
      <View style={{ flex: 1,  }}>

  
      
     <View style={{}}>

<Text style={{fontSize:18,marginLeft:15}}>Email</Text>
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

<Text style={{fontSize:18,marginLeft:15}}>Password</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15, }}>
       <Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       
       <TextInput
         placeholder='Password'
         style={{flex: 1, paddingVertical: 0 }}
         value={password}
         onChangeText={text => setPassword(text)}
       />
     
     </View>
     </View>

       <View style={{flex:1,alignItems:"center",alignContent:"center",}}>
        <Pressable onPress={handlesubmit}>
          <View style={{ width: 200, height: 50, color: "green", backgroundColor: "orange", borderRadius: 40, alignContent: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: 'white', textAlign: "center", marginTop: 10 }}>Login</Text>
          </View>
        </Pressable>

        
        </View>
        <View style={{flex:1,alignItems:"center",alignContent:"center",marginTop:70}}>

        <Text style={{color:"black", fontSize:20}}>Don't have an account?<Text style={{color:"orange", fontSize:20}} onPress={() =>  navigation.navigate("Register")}>Sing up</Text> </Text>
        </View>

      </View>


    </SafeAreaView>

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

export default Login;
