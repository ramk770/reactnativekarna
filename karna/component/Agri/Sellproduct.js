import React, { useState } from 'react'
import { Text, View, TouchableOpacity,StyleSheet, TextInput,Pressable, Button, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import localhost from "../../confix";
import axios from "axios";
import { Picker } from '@react-native-picker/picker';

function Sellproduct({navigation}) {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [price, setprice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [picture, setPicture] = useState('');
  const [quantity, setQuantity] = useState("");
  const [modal, setModal] = useState(false);

  const submitData = () => {
    if (!title || !desc || !price || !phoneNumber || !quantity) {
      alert('Please fill in all fields.'); // Display an error message if any required field is empty
      return; // Exit the function early if any required field is empty
    }
    axios.post(`http://${localhost}/api/v1/sell`, {
      title: title,
      desc: desc,
      "image":picture,
      price:price,
      phoneNumber: phoneNumber,
      quantity:quantity
    }).then((res) => {
        alert("Product  uploaded successfully");
        navigation.navigate("product");
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
    <View style={{flex:1}}>
        <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Sell Product</Text>
    </View>
    <View style={{marginTop:10}}>

    </View>
</View>


    <View style={{marginTop:15}}>
    

    <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder='Title'
        value={title}
        onChangeText={text => settitle(text)}

      />
      </View>
      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder='Description'
        value={desc}
       onChangeText={text => setdesc(text)}

      />
      </View>
      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder='Price'
        value={price}
        onChangeText={text => setprice(text)}

      />
      </View>
      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>PhoneNumber</Text>
      <TextInput
        style={styles.input}
        placeholder='PhoneNumber'
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}

      />
      </View>

      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Quantity</Text>
     <Picker
        selectedValue={quantity}
        onValueChange={(itemValue) => setQuantity(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        >
        <Picker.Item label="Select Quantity ?" value=""  style={{color:"black",fontSize:15}} />
        <Picker.Item label="5k" value="Yes" style={{color:"black",fontSize:15}} />
        <Picker.Item label="10k" value="No" style={{color:"black",fontSize:15}} />
        <Picker.Item label="other" value="D" style={{color:"black",fontSize:15}} />
      </Picker>
      
      </View>
    <View style={{ width: 170, alignSelf: 'center',marginTop:10 }}>
                            <Button
                                color="green"
                                title="Upload Image"
                                onPress={() => setModal(true)}
                            />
  </View>
    
  <View style={{ width: 170, alignSelf: 'center',marginTop:10 }}>
                            <Button
                                color="green"
                                title="Submit"
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
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin:10
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

export default Sellproduct
