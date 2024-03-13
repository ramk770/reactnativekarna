import React from 'react'
import { Image } from 'react-native';
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Srttingsdetails({navigation}) {
  return (
    <ScrollView>
    <View style={{flex:1}}>
         <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Food Waste Hero</Text>
    
    </View>
    <View style={{marginTop:15}}>

    </View>
    </View>
  
  {/* verification requirement like */}
  <View style={{marginTop:10}}>

  
  <View style={styles.maincont}>
    <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginLeft:7,marginTop:5}}>Verification Required</Text>
        <Text style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>
        You'll need to be verified on Karna before registering. Please use the Karna app to verify your account and then return here to register as a Food Waste Hero
        </Text>
        <Text style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>
        You won't be able to register as a Food Waste Hero until you do this.
        </Text>
        <View style={{width:150,height:35,borderRadius:10,backgroundColor:"orange",marginTop:5,marginLeft:5}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"white",alignSelf:"center",textAlign:"center",padding:3}}> Verify with Olio</Text> 
        </View>
    </View>
    <View style={styles.container1}>
    <Image source={require("../../assets/welcome.png")} style={{width:290,height:200,resizeMode:"contain"}}/>
    <Text style={{fontSize:22,fontWeight:"bold",color:"black",padding:15}}> Join Our Food Waste Heroes and help make a difference </Text>
    <TouchableOpacity style={{marginTop:5}}>
    <View style={{width:270, height:35,borderRadius:10,backgroundColor:"orange",marginTop:30,alignItems:"center",justifyContent:"center",alignSelf: "center"}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"white",alignSelf:"center",textAlign:"center",padding:3}}>Become a Food Waste Hero</Text> 
        </View>
        </TouchableOpacity>
        <Text style={{fontSize:15,fontWeight:"200",color:"black",padding:15}}>
        Please ensure you have signed up and verified your account on the Karna app before registering here.
        </Text>
    </View>
    
  </View>



</View>

    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 300,
    height: 310,
    borderRadius: 20,
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
  container1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 300,
    
    borderRadius: 20,
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
}
)
export default Srttingsdetails
