import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Category({navigation}) {
  return (
    <View style={{flex:1}}>
           <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Cateegoey</Text>
    </View>
    <View style={{marginTop:10}}>
    </View>
    </View>
      <View style={styles.maincont}>
      <View>
     <View style={styles.categoryContainer}>
      <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
 <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
</View>
<View style={styles.categoryContainer}>
      <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>
   <TouchableOpacity>
 <View style={styles.catg}>
    <Image source={require("../../assets/cafe.png")}  style={{width:40,height:40,borderRadius:40,resizeMode:"center"}}  />
  </View>
  </TouchableOpacity>

</View>
        

      </View>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    catg: {
       width:50,
       height: 50,
        color: "black",
         backgroundColor: "white",
          borderRadius:50 , 
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          margin:5 ,
          shadowColor: 'black',
      shadowOffset: {
        width: 35,
        height: 35,
      },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 5,
   },
   categoryContainer: {
    flexDirection: "row",
    gap:25,
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent:"center"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 35,
    //   height: 35,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 15,
    // elevation: 5,
    margin: 10,
  },
  maincont: {
   
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}
)

export default Category
