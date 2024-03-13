import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import localhost from "../../confix";
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { createIconSetFromFontello } from 'react-native-vector-icons';


function DonarNonveg({navigation}) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [picture, setPicture] = useState('');
    const [hotel, setHotel] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [address, setAddress] = useState("");
     const [member,setmeber] = useState("");
     const [foodname,setfoodname] = useState("");
    const [modal, setModal] = useState(false);


    const submitData = () => {
        // Validate inputs here if needed
        axios.post(`http://${localhost}/api/v1/nonveg`, {
            name:name,
            location:location,
            "image":picture,
            hotel:hotel,
            phoneNumber:phoneNumber,
            address:address,
            foodname:foodname,
            member:member
        }).then((res) => {
            alert("food uploaded successfully");
        }).catch((e) => {
            console.error(e);
            alert('Some error occurred while uploading recipes');
        });
    }
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
            <LinearGradient colors={['green', '#f7fdf9', '#f7fdf9']}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20 , marginTop:40,}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}> KARNA</Text>
      <FontAwesome name="user" size={20} color="black" />
    </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.container}>
                        <Text style={{ alignSelf: "center", fontSize: 35 }}>NONVEG</Text>
                        <Text style={styles.text}>Name</Text>
                        <TextInput
                            type="text"
                            placeholder="Name"
                            style={styles.input}
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                        <Text style={styles.text}>PhoneNumber</Text>
                        <TextInput
                            type="text"
                            placeholder="Phonenumber"
                            style={styles.input}
                            value={phoneNumber}
                            onChangeText={text => setphoneNumber(text)}
                        />
                        <Text style={styles.text}>Roles</Text>
                        <TextInput
                            type="text"
                            placeholder="Roles"
                            style={styles.input}
                            value={hotel}
                            onChangeText={text => setHotel(text)}
                        />
                         <Text style={styles.text}>Food name</Text>
                        <TextInput
                            type="text"
                            placeholder="Food Name"
                            style={styles.input}
                            value={foodname}
                            onChangeText={text => setfoodname(text)}
                        />
                        <Text style={styles.text}>Member</Text>
                        <TextInput
                            type="text"
                            placeholder="member"
                            style={styles.input}
                            value={member}
                            onChangeText={text => setmeber(text)}
                        /> 

                        <Text style={styles.text}>Details</Text>
                        <TextInput
                            type="text"
                            placeholder="Details"
                            style={styles.input}
                            value={address}
                            onChangeText={text => setAddress(text)}
                        />
                         <Text style={styles.text}> Location</Text>
                        <TextInput
                            type="text"
                            placeholder="location"
                            style={styles.input}
                            value={location}
                            onChangeText={text => setLocation(text)}
                        />
                        <View style={{ width: 170, alignSelf: 'center' }}>
                            <Button
                                color="green"
                                title="Upload Image"
                                onPress={() => setModal(true)}
                            />
                        </View>
                        <View style={{ width: 170, alignSelf: 'center' }}>
                            <Button
                                color="green"
                                title="Upload"
                                onPress={() => submitData()}
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

                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 330,
        gap: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 60,
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        fontSize: 15,
        padding: 10
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
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
    
  input :{
  
    
    width:300,
    height:40,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
     fontSize:15,
     padding:10
      
      
     
   },
   text : {
    fontSize:20,
    fontWeight:"500",
   }

})
const theme = {
    colors:{
        primary:"#006aff"
    }
}
 
  
export default DonarNonveg