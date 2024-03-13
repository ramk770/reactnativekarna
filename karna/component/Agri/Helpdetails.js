import React from 'react'
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Helpdetails({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
<View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
<TouchableOpacity onPress={() => navigation.goBack()}>
 <FontAwesome name="arrow-left" size={20} color="black" />
 </TouchableOpacity>
 <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Help&Support</Text>

</View>
<View style={{marginTop:15}}>

</View>
</View>


<View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
    <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginLeft:7,marginTop:5}}>Help&Support</Text>
        <Text style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>
        You'll need to be verified on Karna before registering. Please use the Karna app to verify your account and then return here to register as a Food Waste Hero
        </Text>
        <Text style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>
        You won't be able to register as a Food Waste Hero until you do this.
        </Text>

        <View >
          <Text style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>PhoneNUmber: 9345222840</Text>
          <Text  style={{fontSize:18,fontWeight:"400",color:"grey",padding:10}}>Gmail:karna@gmail.com</Text>
        </View>
        <View style={{width:200,height:35,borderRadius:10,backgroundColor:"orange",padding:5,marginLeft:5}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"white",alignSelf:"center",textAlign:"center",padding:2}}> VERIFY KARNA</Text> 
        </View>
        <View style={{marginTop:20}}>

        </View>
    </View>
    </View>

</View>
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
    width: 320,
    
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
  }
}
)
export default Helpdetails
