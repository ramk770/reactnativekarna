import React from 'react'
import { View, Text ,TouchableOpacity, Image,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function KarnaFeature({navigation}) {
  return (
    <ScrollView>
    <View style={{flex:1}}>
         <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>KarnaFeature</Text>
    
    </View>
    <View style={{marginTop:15}}>

    </View>
    </View>
     <View style={{marginTop:10}}>
      <Text style={{fontSize:22,padding:15,fontWeight:"bold",color:"black"}}> Got unsold or Unserved food </Text>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <Image source={require("../../assets/nonveg1.png")} style={{width:200,height:150,resizeMode:"contain"}}/>
        <Text style={{fontSize:18,padding:15,fontWeight:"300",color:"black",marginTop:20}}>We have thousands of food safety trained volunteers collecting and redistributing surplus
        food from business to the local community</Text>
      </View>
      <View style={{marginTop:15}}>
         <Text style={{fontSize:22,padding:15,fontWeight:"bold",color:"black"}}>What can we help you with ?</Text>
         <View style={styles.maincont}>
         <View style={styles.container}>
              <Text style={{fontSize:18,color:"black",fontWeight:"bold",marginRight:130}}>
                One-off collection
              </Text>
              <Text style={{padding:5}}>
                eg.ad hoc surplus from events, photoshoots bulk overProduction.etc
              </Text>
              <View style={{width:120,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
              <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center"}}>Book now</Text>
               

              </View>
      
         </View>
         <View style={styles.container}>
              <Text style={{fontSize:18,color:"black",fontWeight:"bold",marginRight:130}}>
                Regular collection
              </Text>
              <Text style={{padding:5}}>
                eg.ad hoc surplus from events, photoshoots bulk overProduction.etc
              </Text>
              <View style={{width:120,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
              <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center"}}>Book now</Text>
               

              </View>
      
         </View>
         </View>
      </View>

     </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
 
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 130,
    borderRadius: 15,
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
  maincont: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}
)


export default KarnaFeature
