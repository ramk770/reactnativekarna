import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Metadata({navigation}) {
  return (
    <View style={{flex:1}}>
         <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>Meta_data</Text>
    </View>
    <View style={{marginTop:15}}>

    </View>
    </View>
    <View style={{marginTop:20}}>
        <Text style={{fontSize:17,fontWeight:"400",color:"grey",padding:10}}>
        The sun dipped low on the horizon, casting long shadows across the quiet town of Willowbrook. It was a place where time seemed to stand still, where the rhythm of life was dictated by the gentle sway of the willow trees that lined the streets. In this idyllic setting, secrets whispered on the breeze and stories lingered in the corners of every old building.

Nestled between the rolling hills and meandering streams, Willowbrook was a haven for those seeking refuge from the chaos of the outside world. Its cobblestone streets were lined with quaint cottages, their colorful gardens spilling over with fragrant blooms. The town square bustled with activity, as villagers gathered to barter goods and share gossip.

But beneath its picturesque facade, Willowbrook harbored a dark history. Legends spoke of ancient curses and vengeful spirits that haunted the mist-shrouded woods beyond the town limits. It was said that those who dared to venture into the forest never returned, their fates forever entwined with the secrets that lurked within.

Despite the warnings, there were those who dared to defy the darkness that hung over Willowbrook. Among them was Elara, a young woman with a fierce spirit and a thirst for adventure. She had grown up hearing tales of the forest's mysteries, and she longed to uncover the truth hidden within its depths.
        </Text>
    </View>
  
    </View>
  )
}

export default Metadata
