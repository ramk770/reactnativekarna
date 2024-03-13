import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image , FlatList, ScrollView, Modal, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from "@react-navigation/native";
import { useState } from 'react';
const data = [
  { id: '1', weight: '1m' },
  { id: '2', weight: '2m' },
  { id: '3', weight: '5m' },
  { id: '4', weight: '10m' },
  { id: '5', weight: '20m' }
];
const ListItem = ({ weight }) => (
  <View style={styles.item}>
    <Text style={{alignSelf:"center",fontSize:17,fontWeight:"bold", textAlign:"center",padding:2}}>{weight}</Text>
  </View>
);
function Reciverdetails({navigation}) {
  
 const book = () => {
   return alert("successfull booked")
 }
 const [modal, setModal] = useState(false);

  const router = useRoute();
  const { item } = router.params;
  return (
    <ScrollView >
    <View style={{flex:1,backgroundColor:'orange'}}>
       <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20,  marginTop:50 }}>
    <TouchableOpacity onPress={() => navigation.goBack()} >
      <FontAwesome name="arrow-left" size={25} color="green" />
      </TouchableOpacity>
      <Text style={{ color: "green", fontSize: 35, fontWeight: "bold" }}> KARNA</Text>
      <FontAwesome name="heart" size={35} color="green" />
    </View>

           <View style={{flex:1, backgroundColor:"white", }}>
       <View style={styles.container}>
        <Image source={{uri:item.image}}  style={{ resizeMode:"contain", alignItems:"center",  width: "100%",
    height: "70%"}}/>
     <View style={{flexDirection:"row",justifyContent:"space-around",paddingHorizontal:20,padding:10}}>
       <Text style={{fontSize:18,fontWeight:"800", flex:1}}>  <Icon name="heart" size={30} color="yellow" /> Free Breakfast</Text>
       {/* <Text style={{fontSize:20,fontWeight:"bold",}}>{item.location}</Text> */}
       <Text style={{fontSize:20,fontWeight:"bold",}}> <FontAwesome name="star" size={30} color="yellow" />5.0</Text>
        
       </View> 
       </View>


   {/* donar details */}


       <View style={{flex:1}}>
        <Text style={{fontSize:20,fontWeight:"bold",margin:10}}> {item.name}</Text>
        <View style={{flex:1, marginTop:5 }}>
         <Text style={{fontSize:19,fontWeight:"900", borderBottomColor:"black",marginBottom:10,marginLeft:10}}> Sellar </Text>
         <View style={styles.usercon}>
           <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:'center', }}>
           <View  >
           <Image source={require('../../assets/user.png')} style={styles.image} />
           </View>
           <View style={{marginRight:100}}>
           <Text style={{fontSize:19,fontWeight:"800"}}>{item.name}</Text>
           <Text style={{fontSize:15,fontWeight:"300"}}>{item.location}</Text>
           </View>
           <FontAwesome name="comment" size={30} color="black" />
           <View>
           <FontAwesome name="phone" size={30} color="black" />
          
           </View>
          

           </View>
           </View>

        </View>

       {/* select the size */}
      <View style={{flex:1,}}>
        <Text style={{fontSize:19,fontWeight:"900", borderBottomColor:"black",marginBottom:10,marginLeft:10}}>Select Size</Text>
        <FlatList
      data={data}
      renderItem={({ item }) => <ListItem weight={item.weight} />}
      keyExtractor={item => item.id}
      horizontal={true}
    />
   <Text style={styles.line}></Text>
      </View>
  {/* About */}
    <View style={{flex:1}}>
      <Text style={{fontSize:19,fontWeight:"900", borderBottomColor:"black",marginBottom:10,marginLeft:10}}>About</Text>
       <Text style={{padding:20,fontSize:15,color:"grey"}}>
Hello Ram! It's great to meet you. As a developer, if you have any questions or need assistance with anything related to development, feel free to ask! Whether it's about React Native, JavaScript, or any other technology, I'm here to help.{item.address},{item.phoneNumber},</Text>
    </View>
    {/* orderthe product */}
   
    <View style={{flex:1, alignItems:"center"}}>
  <View style={styles.order}>
    <View style={{flexDirection:"row",justifyContent:"space-around", alignItems:"center"}}>
      <View style={{alignItems:"center",padding:10}}>
        <Text style={{fontSize:20,fontWeight:"bold", textAlign: "center"}}>Price</Text>
        <Text style={{fontSize:15,fontWeight:"bold", textAlign: "center"}}>Free</Text>
      </View>

      <TouchableOpacity style={{width:100,height:40,backgroundColor:"orange",borderRadius:20,alignItems:"center",justifyContent:"center"}} onPress={() => setModal(true)} >
        <Text style={{fontSize:18,fontWeight:"bold",color:"white",textAlign:"center"}} >
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

       </View>
           
    </View>
      
    </View>
  {/* SUCCESS FULL MESSAGE GIVE  */}
  <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={{width:350,height:200,backgroundColor:"white",alignItems:"center",marginTop:300,flex:1,margin:10,borderTopLeftRadius:20,borderTopRightRadius:20,borderColor:"black"}}>
                  <View style={{alignItems:"center",justifyContent:"center"}}>
                        <Image source={require("../../assets/sssss.png")} style={{width:200,height:130,resizeMode:"contain",marginTop:20}}/>
                        <View style={{marginTop:20}}>
                        <Text style={{fontSize:20,fontWeight:"bold",color:"black",padding:20,textAlign:"center"}}>Thanks for your Booking</Text> 
                        <Text style={{fontSize:15,fontWeight:"500",color:"grey",padding:5}}> You'll receive Your parcel shortly from our delivery partner . Thanky again for choosing us</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("reciver")}>
                        <View style={{width:100,height:35,backgroundColor:"orange",borderRadius:10,alignContent:"center",alignItems:"center"}}>
                          <Text style={{fontSize:18,fontWeight:"bold",color:"black",alignContent:"center",textAlign:"center",padding:3}}>Done</Text>
                        </View>
                        </TouchableOpacity>
                        
                  </View>
                  <View style={{marginTop:30}}>
                  
                  <Button 
                 title='cancel'
                 color="green"
                onPress={() => setModal(false)}>
                        
                </Button>
                  </View>
                
              </View>
             </Modal>





    </ScrollView>
  );
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
    width: 350,
    height: 320,
    borderRadius: 43,
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
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  usercon : {
    
  
    width: 330,
    height: 80,
    borderRadius: 23,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
   margin:10

  },
  item: {

    width: 50,
    height: 40,
    borderRadius: 23,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    gap:20,
    margin:10
  },
  line : {
     marginBottom:10,
     borderBottomWidth: 2,
     borderBottomColor: '#ccc'
  },
  order : {
    width: 350,
    height: 60,
    borderRadius: 23,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  }
}
)
export default Reciverdetails