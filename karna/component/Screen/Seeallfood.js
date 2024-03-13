import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Seeallfood({navigation}) {
  return (
    <View style={{flex:1}}>
          <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Category</Text>
    </View>
    <View style={{marginTop:10}}>

    </View>
    </View>
    </View>
  )
}

export default Seeallfood
