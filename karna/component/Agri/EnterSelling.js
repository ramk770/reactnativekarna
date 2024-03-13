import React from 'react';
import { Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function EnterSelling({navigation}) {
  return (
    <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 50, marginLeft: 20 }}>
      <FontAwesome name="arrow-left" size={20} color="black" />
    </TouchableOpacity>
    <View style={{  alignItems: "center", justifyContent: "center",marginTop:100 }}>
      <Image source={require("../../assets/donar.png")} style={{ width: 100, height: 50, resizeMode: "contain" }} />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", marginTop: 10 }}>Selling on Karna</Text>
    </View>
    <View style={{ padding: 20, }}>
      <Text style={{ fontWeight: "500", fontSize: 18 }}>Putting items up for sale is quick and easy. Here are the rules:</Text>
    </View>

    <View style={{marginTop:30}}>
    <View style={{flexDirection:'row',paddingHorizontal:20,marginTop:10,gap:20}}>
    <FontAwesome name='check' size={20} color="green" />
    <Text style={{ fontWeight: "500", fontSize: 18 }}> Local collection only. so no shipping or postage </Text>

    </View>
    <View style={{flexDirection:'row',paddingHorizontal:20,marginTop:10,gap:20}}>
    <FontAwesome name='check' size={20} color="green" />
    <Text style={{ fontWeight: "500", fontSize: 18 }}> Organise your preferred payment option with your buyer </Text>

    </View>
    <View style={{flexDirection:'row',paddingHorizontal:20,marginTop:10,gap:20}}>
    <FontAwesome name='check' size={20} color="green" />
    <Text style={{ fontWeight: "500", fontSize: 18 }}> Organise your preferred payment option with your buyer </Text>

    </View>
  
</View>
<View style={{flex:1,alignItems:"center",alignContent:"center",marginTop:100}}>
      <Pressable onPress={() => navigation.navigate("sell")}>
        <View style={{ width: 200, height: 50, color: "green", backgroundColor: "orange", borderRadius: 40, alignContent: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: "center", marginTop: 10 }}>I Understand</Text>
        </View>
      </Pressable>

      
      </View>



  </View>
  )
}

export default EnterSelling
