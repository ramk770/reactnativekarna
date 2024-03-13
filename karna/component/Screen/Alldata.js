import React, { useState, useEffect } from 'react'
import { View, Text , Image, StyleSheet, FlatList, TouchableOpacity, Pressable} from 'react-native';
import axios from 'axios';
import localhost from '../../confix';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Alldata({navigation}) {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        axios.get(`http://${localhost}/api/v1/nonveg`)
            .then(res => {
                
                setRecipe(res.data.data.nonveg);
            })
            .catch(error => console.error(error));
    }, []);

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <View style={styles.cardContainer} >
             <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("recipe", {item})}>
                        <FontAwesome name="heart" size={24} color="green" />
                    </TouchableOpacity>
                <Image source={{uri:item.image}} style={styles.image}  />
                <Text style={styles.title} onPress={() => navigation.navigate("detail", {item})}>{item.foodname}</Text>
                <Text style={styles.author} onPress={() => navigation.navigate("detail", {item})}>{item.name} </Text>
                <Text style={styles.author} onPress={() => navigation.navigate("detail", {item})}>{item.location} </Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />

                </View>
                
                
            </View>
        );
    };


  return (
   <View style={{flex:1,backgroundColor:'#fff8dc'}}>
   <View style={{marginTop:35,marginHorizontal:16, flexDirection:'row'}}> 
   <Pressable onPress={() => navigation.goBack()} style={{marginHorizontal:10,marginTop:5}}>
<FontAwesome
    name="arrow-left"
    size={25}
    color="black"
    style={{ flex: 1 }}
    
/>
</Pressable>
    <Text style={{fontSize:30,color:'black',fontWeight:'bold'}}>All Foods</Text>
   </View>
    
    <FlatList
                data={recipe}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                horizontal={false}
                numColumns={2}
                
            /> 
            

   </View>
  )
}
const styles = StyleSheet.create({
    contin: {
        flex: 1,
        backgroundColor:'#fff8dc'
       
    },
    subcon1 :{
        margin:10,
        
        // justifyContent:'space-between'
    },
    categary :{
        
        
    },
    circularImage: {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed
        borderRadius: 75, // Half of the width and height to create a circle
      },
      Container: {
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color:'black',
        borderColor:'black'
      },
      sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      },
    //   2 data show
    listContainer: {
        padding: 10,
        
    
    },
    cardContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        // marginHorizontal: 10,
        alignSelf:"flex-end"
    },

});

export default Alldata

