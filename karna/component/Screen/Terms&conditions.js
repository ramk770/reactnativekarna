import React from 'react'
import { View, Text , TouchableOpacity, } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Termsconditions({navigation}) {
  return (
    <View style={{flex:1}}>
       <View style={{backgroundColor:"orange",  }}>
    <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20,marginTop: 40 }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>Terms&Conditions</Text>
      <FontAwesome name="user" size={30} color="black" />
    </View>
    </View>
    <View style={{marginTop:15}}>
    <Text style={{fontSize:16,fontWeight:"200",color:"grey",padding: 18}}>
    Food donation and receipt are facilitated based on terms and conditions established to ensure the safety and efficacy of the process. Donors are encouraged to provide food that is within its expiration date, properly stored, and free from contamination. Receivers are responsible for accepting donations in good faith and adhering to guidelines regarding handling and consumption. Terms may include requirements for proper labeling, transportation, and distribution of donated food. Both donors and receivers should prioritize health and hygiene standards, acknowledging the importance of transparency and communication throughout the donation process to promote trust and accountability within the community.

    </Text>

    </View>
      
    </View>
    
  )
}

export default Termsconditions
