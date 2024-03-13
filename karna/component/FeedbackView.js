import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState,useEffect} from "react"
import axios from "axios";
import localhost from '../confix';
function FeedbackView({navigation}) {


const[feedback,setfeedBack]= useState([])


    useEffect(() => {
        axios.get(`http://${localhost}/api/v1/feedback`)
            .then(res => {
                
                setfeedBack(res.data.data.feedback)
            })
            .catch(error => 
            console.log("hello",error) );
      }, []);
      
        const renderItem = ({ item }) => (
          <View>
          <View style={styles.container} key={item.name}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
            <Text style={{ fontSize: 19, fontWeight: "800", lineHeight: 20, color: 'black' }}>{item.name}</Text>
            <Text>{item.feedbacktext}</Text>
            <Text>{item.rating} </Text>
            </View>
            </View>
            <View>
              <Text style={{fontSize:15,color:"black",fontWeight:"500"}}>rightNow {item.date}</Text>
              <View style={{flexDirection:"row",}}>
              <FontAwesome name='check' size={20} color="green" />
              <FontAwesome name='check' size={20} color="green" />
              </View>
              
            </View>
          </View>
          <Text  style={{
           marginBottom:2,
           borderBottomWidth: 2,
           borderBottomColor: '#ccc'
        }}>
      
        </Text>
          </View>
        );

  return (
    <View>
        <View style={{backgroundColor:"orange"}}>
<View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <FontAwesome name="arrow-left" size={25} color="black" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>FeedBack</Text>

</View>
</View>
<View style={{marginTop:10}}>
<FlatList
   data={feedback}
   renderItem={renderItem}
   keyExtractor={item => item.name.toString()}
   />
</View>

    </View>
  )
}

const styles = StyleSheet.create({
    
    header: {
      flexDirection: "row",
     gap:20,
      paddingHorizontal: 20,
      marginTop: 40,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
headerTitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  },
  container: {
    flexDirection: "row",
    padding:10,
    justifyContent: "space-between",
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // paddingVertical: 10,
    // paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain' // Adjust the resizeMode as needed
  },
},
)

export default FeedbackView
