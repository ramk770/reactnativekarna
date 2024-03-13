import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View , Button,Modal,Alert} from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import localhost from '../confix';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setconfirmPassword] = useState('');
  const [role,setrole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = async () => {
    // Check if any required field is empty
    if (!name || !email || !password || !confirmPassword || !phoneNumber || !role || !picture) {
      alert('Please fill in all fields.'); // Display an error message if any required field is empty
      return; // Exit the function early if any required field is empty
    }
  
    try {
      const response = await axios.post(`http://${localhost}/api/v1/register`, {
        name: name,
        email: email,
        "image":picture,
        password: password,
        confirmPassword: confirmPassword,
        phoneNumber: phoneNumber,
        role: role
      });
  console.log(picture);
      console.log(response.data); // Log response data for debugging
  
      if (response.data === 'success') {
         alert('You have already logged in.'); // Log a warning if registration is not successful
      } else {
        navigation.navigate('Login'); // Navigate to login screen if registration is successful
      }
    } catch (error) {
      console.log(error);
      console.error('An error occurred during registration:', error); // Log the error for debugging
      alert('An error occurred during registration. Please try again later.'); // Display an error message to the user
    }
  };
  
  const pickFromGalleryWithPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
  
        if (!result.canceled) {
          const image = result.assets[0]; // Access image from "assets" array
  
          const newFile = {
            uri: image.uri,
            type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
            name: `test.${image.uri.split(".").pop()}`,
          };
  
          handleUpload(newFile);
          setModal(false);
        }
      } catch (error) {
        console.error(error.message); // handle error
      }
    } else {
      Alert.alert("Permission denied for accessing the gallery");
    }
  };
  const pickFromCameraWithPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
        if (!result.canceled) {
            const image = result.assets[0]; // Access image from "assets" array
    
            const newFile = {
              uri: image.uri,
              type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
              name: `test.${image.uri.split(".").pop()}`,
            };
    
            handleUpload(newFile);
            setModal(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
    } else {
      Alert.alert("Permission denied for accessing the camera");
    }
  };
     const handleUpload = (image)=>{
          const data = new FormData()
          data.append('file',image)
          data.append('upload_preset','mfg5ed3t')
          data.append("cloud_name","daqnlvhjm")
  
          fetch("https://api.cloudinary.com/v1_1/dv31wonpd/image/upload",{
              method:"post",
              body:data
          }).then(res=>res.json()).
          then(data=>{
              setPicture(data.url)
              alert("images loaded uploaded")
              setModal(false)
          }).catch(err=>{
              Alert.alert("error while uploading")
          })
     }



  return (
    <ScrollView>
      <View style={{marginTop:35}}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:35,color:"black",fontWeight:"bold"}}>Create New Account</Text>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "black" }} >Fill Your Details </Text>
        
      </View>
      </View>

      <View style={{ flex: 1, }}>
      <View style={{}}>

<Text style={{fontSize:18,marginLeft:10}}>Name</Text>
<View style={{ marginTop: 10, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15, }}>
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

<Text style={{fontSize:18,marginLeft:15}}>Email</Text>
<View style={{ marginTop: 10, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
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
<View style={{ marginTop: 10, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15, }}>
       <Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       
       <TextInput
         placeholder='Password'
         style={{flex: 1, paddingVertical: 0 }}
         value={password}
         onChangeText={text => setPassword(text)}
       />
       </View>
       </View>
       <View>
       <Text style={{fontSize:18,marginLeft:15}}>confirmPassword</Text>
<View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15, }}>
       <Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       
       <TextInput
         placeholder='confirmPassword'
         style={{flex: 1, paddingVertical: 0 }}
         value={confirmPassword}
         onChangeText={text => setconfirmPassword(text)}
       />
     
     </View>
     </View>
     <View style={{}}>

<Text style={{fontSize:18,marginLeft:10}}>Role</Text>
{/* <View style={{ marginTop: 10, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
       <Ionicons name="people-circle-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
       <TextInput
          placeholder='Role'
          style={{ flex: 1, paddingVertical: 0 }}
          value={role}
          onChangeText={text => setrole(text)}
        />
     </View> */}
     <Picker
    selectedValue={role}
    onValueChange={(itemValue) => setrole(itemValue)}
    style={{ zIndex: 9999, elevation: 1000, }}
>
        <Picker.Item label="Select role ?" value=""  style={{color:"black",fontSize:15}} />
        <Picker.Item label="Reciver" value="Yes" style={{color:"black",fontSize:15}} />
        <Picker.Item label="Donar" value="No" style={{color:"black",fontSize:15}} />
        <Picker.Item label="seller" value="S" style={{color:"black",fontSize:15}} />
        <Picker.Item label="other" value="D" style={{color:"black",fontSize:15}} />
      </Picker>
      <Text style={styles.line}></Text>
     </View>
     <View style={{}}>
<Text style={{fontSize:18,marginLeft:10}}>PhoneNumber</Text>
<View style={{ marginTop: 10, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 15 }}>
       <Ionicons name="call-outline" size={25} color={'#666'} style={{ marginLeft: 5,padding:5 }} />
        
       <TextInput
          placeholder='PhoneNumber'
          style={{ flex: 1, paddingVertical: 0 }}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
     </View>
     </View>
        
     <View style={{flex:1,alignItems:"center",alignContent:"center",}}>
        <Pressable onPress={handleSubmit}>
          <View style={{ width: 200, height: 50, color: "green", backgroundColor: "orange", borderRadius: 40, alignContent: "center",  }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: 'white', textAlign: "center",padding:10  }}>Reister</Text>
          </View>
        </Pressable>
        </View>
        <View style={{flex:1,alignItems:"center",alignContent:"center",marginTop:10}}>

        <Text style={{color:"black", fontSize:20}}>Don't have an account?<Text style={{color:"orange", fontSize:20}} onPress={() =>  navigation.goBack()}>login</Text> </Text>
        </View>

      </View>
      <View style={{ width: 170, alignSelf: 'center',marginTop:15}}>
                            <Button
                                color="green"
                                title="Upload Image"
                                onPress={() => setModal(true)}
                            />
                            </View>
      <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                        title='camera'
                         onPress={() =>pickFromCameraWithPermissions()}>
                                
                        </Button>
                        <Button 
                         title=' gallery'
                          onPress={() => pickFromGalleryWithPermissions()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>


    </ScrollView>

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
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%', // Adjust width as needed
    marginVertical: 10, // Adjust margin as needed
  },
  modalView:{

    position:"absolute",
    bottom:2,
    width:"100%",
    backgroundColor:"white"

},
modalButtonView:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10
},btn:{
    backgroundColor:"blue",
    borderRadius:30,
},
textarea:{
    height:"30%",
    borderWidth:2,
    borderColor:"black",
    margin:"4%"
},
lable:{
  fontSize:25,
  paddingLeft:20
},

});

export default Register;

