
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Addshowing from './Addshowing';
function DonarPage({navigation}) {
  return (
    <SafeAreaView style={{flex:1}} >
     <View style={{backgroundColor:"orange",  }}>
    <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20,marginTop: 40 }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>DONAR</Text>
      <FontAwesome name="user" size={25} color="black" />
    </View>
    </View>
   <View style={{marginTop:10}}>
   <Addshowing />
   </View>
     
    <View style={styles.maincont}>
        <TouchableOpacity onPress={() => navigation.navigate("nonveg")}>
          <View style={styles.container}>
            <Image source={require("../../assets/nonveg1.png")} style={styles.image} />
            <Text style={styles.text}>NONVEG</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("veg")}>
        <View style={styles.container}>
          <Image source={require("../../assets/veg.png")} style={styles.image} />
          <Text style={styles.text}>VEG</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("wasted")}>
        <View style={styles.container}>
          <Image source={require("../../assets/Image.png")} style={styles.image} />
          <Text style={styles.text}>WASTE</Text>
        </View>
        </TouchableOpacity>
       
      </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    
  },
  container12 : {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 210,
    borderRadius: 23,
    backgroundColor: 'green',
    shadowColor: 'green',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    
  },
  container: {
    
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    margin: 3,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  text: {
    marginTop: 10,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});


export default DonarPage
