import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const screen = Dimensions.get('window').width;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const data = [
    {
      id: 1,
      name: 'Hostel A',
      location: 'Location A',
      image: require('../../assets/j.png'),
    },
    {
      id: 2,
      name: 'Hostel B',
      location: 'Location B',
      image: require('../../assets/ve.png'),
    },
    // Add more hostel data as needed
  ];
  
const HostelListItem = ({ item }) => (
  <View style={styles.hostelContainer}>
     <View style={styles.hostelInfo}>
     <Text style={{fontSize:30, fontStyle: 'italic',fontWeight:"400",color:"red"}}>Get Special Offer </Text>
     <Text style={{fontSize:30, fontStyle: 'italic',fontWeight:"400"}}> Up to 20</Text>
      {/* <Text style={styles.hostelName}>{item.name}</Text>
      <Text style={styles.hostelLocation}>{item.location}</Text> */}
      <View style={{width:100,height:35,backgroundColor:"orange",padding:5,borderRadius:10,}}>
        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center",alignSelf:"center"}}>Book Now</Text>
      </View>
    </View>   
    <Image source={item.image} style={styles.hostelImage} />
    
  </View>
);


function Agricultureadd() {
  
  return (
    <FlatList
      data={data}
      renderItem={HostelListItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
     pagingEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    gap:20
  },
  hostelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:320,
    height:210,
    backgroundColor: 'white',
    borderRadius: 10,
   
    
  },
  hostelImage: {
    width: Dimensions.get('window').width,
    resizeMode: "contain",
    borderRadius: 10,
    width:150,

   

  },
  hostelInfo: {
    flex: 1,
    marginLeft: 10,
  },
  hostelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hostelLocation: {
    fontSize: 14,
    color: 'gray',
  },
});


export default Agricultureadd
