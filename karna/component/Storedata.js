import React from 'react'
import { ScrollView, View,Text, StyleSheet, TextInput, Image , FlatList, TouchableOpacity, ScrollViewBase} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Addshowing from './Screen/Addshowing';
import Notificationpell from "./Screen/Notificationpell";
import Addcurrentdata from './Screen/Addcurrentdata';
import { SafeAreaView } from 'react-native';
import localhost from '../confix';
import { useState, useEffect } from 'react';
import axios from 'axios';
const data = [
  { id: '1', image: "Veg" },
  { id: '2', image: "NonVeg" },
  { id: '3', image: "Tea" },
  
];

const ListItem = ({ item }) => (
  <View style={styles.catg}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: "center",alignSelf:"center", padding:5 }}>{item.image}</Text>
  </View>
);






function Storedata({navigation}) {



  const [nonveg,setnonveg] = useState([]);
    
  useEffect(() => {
      axios.get(`http://${localhost}/api/v1//nonveg`)
          .then(res => {
              
              setnonveg(res.data.data.nonveg)
          })
          .catch(error => 
          console.log("hello",error) );
  }, []);


  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer} key={item.name}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name='heart' size={24} color="red" />
        </TouchableOpacity>
         <Image source={{uri:item.image}} style={styles.image} /> 
        <Text style={styles.title} onPress={() => navigation.navigate("detail", {item})}>{item.name}</Text>
        <Text style={styles.author} onPress={() => navigation.navigate("detail", {item})}>{item.location}</Text>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="star" size={20} color="yellow" />
          <FontAwesome name="star" size={20} color="yellow" />
          <FontAwesome name="star" size={20} color="yellow" />
          <FontAwesome name="star" size={20} color="yellow" />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
      <View style={{backgroundColor: "orange",flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
         <View style={{flexDirection:"row",justifyContent: "space-between",marginTop:60,paddingHorizontal:16,  }}>
          <View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Welcome </Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Ram</Text>
          </View>
          <View style={styles.order}>
          <TouchableOpacity onPress={() => navigation.navigate("pell")}>
          <Notificationpell notificationCount={1} />
          </TouchableOpacity>
          
          </View>
         </View>
       {/* serachbar */}

         <View style={{flexDirection: 'row',margin:5, marginTop:20}} >
        <View style={styles.Container}>
        <FontAwesome name="search" size={28} style={{marginLeft:20}} />
        <TextInput placeholder="Search" style={styles.input} /> 
      </View>
      
        <View style={styles.sortBtn}>
        <FontAwesome  name="reorder"  size={28} color='white' />
    </View>

           </View> 
           <View style={{marginTop:15}}>

           </View>
    
    </View>
    
  <View style={{marginTop:10}} >
  <View style={{flex:1,flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10 }}>
          <Text style={{fontSize:20,fontWeight:"bold",}}> Category</Text>
          <Text style={{fontSize:20,fontWeight:"bold"}} onPress={() =>navigation.navigate("category")}> See All </Text>
        </View>
  {/* <FlatList
      data={data}
      renderItem={ListItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
    /> */}

 <View style={{flexDirection:"row",justifyContent:"space-around",paddingHorizontal:10}}>
 <TouchableOpacity onPress={() =>navigation.navigate("veg")}>
 <View style={styles.catg}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: "center",alignSelf:"center", padding:5 }} >Veg</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() =>navigation.navigate("nonveg")}>
  <View style={styles.catg}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: "center",alignSelf:"center", padding:5 }}>NonVeg</Text>
  </View>
  </TouchableOpacity>
  {/* <View style={styles.catg}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: "center",alignSelf:"center", padding:5 }}>Tea</Text>
  </View> */}
 </View>



  </View>




   <View style={{flex:1,marginTop:10}}>
        <View style={{flex:1,flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10 }}>
          <Text style={{fontSize:20,fontWeight:"bold",}}> Special Offers</Text>
          <Text style={{fontSize:20,fontWeight:"bold"}}> See All </Text>
        </View>
   </View>
  


   {/* disply the add */}
   <View style={{marginTop:10}}>
   <Addcurrentdata />
   </View>
   <View style={{flex:1,flexDirection:"row", justifyContent:"space-between",paddingHorizontal:12,marginTop:10 }} >
     <Text style={{fontSize:20,
          fontWeight:'bold', flex:1}}>
           Recent Food </Text>
            
        <Text style={{fontSize:20,
            fontWeight:'bold'}} onPress={() => navigation.navigate("all")}>See all</Text>
     </View>
     
  
    
   </ScrollView>
     {/* reder the correct data */}
     <View style={{flex:15,}}>
     
     
     <FlatList
  data={nonveg}
  keyExtractor={(item) => item.name.toString()} // Ensure item.id is a string
  renderItem={renderItem}
  contentContainerStyle={styles.listContainer}
  horizontal={false}
  numColumns={2}
/>
 </View>
     
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    gap:30
  },
  order : {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  Container: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color:'black',
    borderColor:'black'
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catg: {
    width: 130,
     height: 37,
      color: "black",
       backgroundColor: "orange",
        borderRadius: 20, 
        alignContent: "center", 
        margin:5 
 },
 listContainer: {
  padding: 10,
  height:"10000%",

},
cardContainer: {
  flex: 1,
  margin: 10,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  alignItems: 'center',
  elevation: 3,
 
},
image: {
  width: 100,
  height: 100,
  borderRadius: 75,
  marginBottom: 10,
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
},
author: {
  fontSize: 14,
  color: 'gray',
  marginBottom: 10,
},
iconContainer: {
  flexDirection: 'row',
},
icon: {
  // marginHorizontal: 10,
  alignSelf:"flex-end"
},

}
)

export default Storedata
