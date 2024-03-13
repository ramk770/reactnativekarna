import React, { useState } from 'react';
    import { StyleSheet, Text, View, Modal, Button, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
    import * as ImagePicker from 'expo-image-picker';
    import * as Permissions from 'expo-permissions';
    import { Camera } from 'expo-camera';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import localhost from "../../confix";
    import { LinearGradient } from 'expo-linear-gradient';
    import axios from 'axios';

function Sellpaddy({navigation}) {
        const [name, setName] = useState("");
        const [location, setLocation] = useState("");
        const [image, setImage] = useState("");
        const [hotel, setHotel] = useState("");
        const [phoneNumber, setphoneNumber] = useState("");
        const [address, setAddress] = useState("");
        const [modal, setModal] = useState(false);
    
        const submitData = () => {
            // Validate inputs here if needed
            axios.post(`http://${localhost}/api/v1/nonveg`, {
                name:name,
                location:location,
                image:image,
                hotel:hotel,
                phoneNumber:phoneNumber,
                address:address
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
    
                    if (!result.cancelled) {
                        handleUpload(result.uri);
                    }
                } catch (error) {
                    console.error(error.message);
                    Alert.alert("Error", "An error occurred while picking image from gallery.");
                }
            } else {
                Alert.alert("Permission denied", "Permission denied for accessing the gallery.");
            }
        };
    
        const handleUpload = async (uri) => {
            const formData = new FormData();
            formData.append('file', { uri: uri, type: 'image/jpeg', name: 'image.jpg' });
        
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dv31wonpd/image/upload", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
        
                const data = response.data;
                setImage(data.url);
                alert("Image uploaded successfully");
                setModal(false);
            } catch (error) {
                console.log(error);
                console.error(error);
                Alert.alert("Error", "An error occurred while uploading image.");
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
    
                    if (!result.cancelled) {
                        handleUpload(result.uri);
                    }
                } catch (error) {
                    console.error(error.message);
                    Alert.alert("Error", "An error occurred while taking a photo.");
                }
            } else {
                Alert.alert("Permission denied", "Permission denied for accessing the camera.");
            }
        };
    
        return (
            <ScrollView>
                <LinearGradient colors={['orange', '#f7fdf9', '#f7fdf9']}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20 , marginTop:37,}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={35} color="black" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 35, fontWeight: "bold" }}> KARNA</Text>
          <FontAwesome name="user" size={35} color="black" />
        </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.container}>
                            <Text style={{ alignSelf: "center", fontSize: 35 }}>Waste</Text>
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
                            <Text style={styles.text}>Address</Text>
                            <TextInput
                                type="text"
                                placeholder="Address"
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
                                onRequestClose={() => {
                                    setModal(false);
                                }}
                            >
                                <View style={styles.modalView}>
                                    <View style={styles.modalButtonView}>
                                        <Button
                                            title='Camera'
                                            onPress={() => pickFromCameraWithPermissions()}
                                        />
                                        <Button
                                            title='Gallery'
                                            onPress={() => pickFromGalleryWithPermissions()}
                                        />
                                    </View>
                                    <Button
                                        title='Cancel'
                                        onPress={() => setModal(false)}
                                    />
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
     
      

export default Sellpaddy
