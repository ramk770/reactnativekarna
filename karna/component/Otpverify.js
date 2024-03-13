import React from 'react'
import {Image, Text, View,StyleSheet,TextInput, SafeAreaView} from "react-native";

function Otpverify() {
  return (
   
  


    <SafeAreaView style={styles.container}>
    <View style={{flex:1,marginTop:60}}>
       <View style={{justifyContent:"center",alignItems:"center", }} >

        <Image source={require('../assets/Image.png')}  style={{width:250,height:250, resizeMode:"contain"}}/>
       
       </View>
      
       <Text style={{fontSize:28,color:"black",fontWeight:'bold',marginLeft:30,marginTop:10}}>OTP Verification</Text>
       <Text style={{fontSize:18,color:"black",fontWeight:'400',marginLeft:30,color:"grey"}}>enter the phone number and email to send one time password</Text>
       <View style={styles.container}>
      <Text style={styles.label}>Enter OTP:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Otp'
        keyboardType="numeric"
        maxLength={6}
      />
      <View style={{width:300,height:50,color:"green",marginTop:100,backgroundColor:"#ffa500", borderRadius:40,alignContent:"center"}}>
        <Text style={{fontSize:28,fontWeight:"bold",color:'white',textAlign:"center",marginTop:10}}>continue</Text>
      </View> 
      
     
    </View>
    </View>
    </SafeAreaView>
  )


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:10
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,borderRadius:40,
      
      paddingHorizontal: 10,
    },
  })

export default Otpverify
