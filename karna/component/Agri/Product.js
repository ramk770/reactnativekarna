import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import localhost from '../../confix';
function Product({ navigation }) {
    const [sell, setSell] = useState([]);
    const [free, setFree] = useState([]);

    useEffect(() => {
      
        axios.get(`http://${localhost}/api/v1/sell`)
            .then(res => {
                setSell(res.data.data.sell);
            })
            .catch(error => console.error(error));
    }, []);
    useEffect(() => {
    axios.get(`http://${localhost}/api/v1/free`)
            .then(res => {
                console.log("free",free)
                setFree(res.data.data.free);
            })
            .catch(error => console.error(error));
          }, []);
    const FreeListItem = ({ item }) => (
        <View style={styles.hostelContainer} key={item.title}>
            <Image source={{ uri: item.image }} style={styles.hostelImage} />
            <View style={styles.hostelInfo}>
                <Text style={styles.hostelName}>{item.title}</Text>
                <Text style={styles.hostelLocation}>{item.desc}</Text>
                <Text style={styles.hostelPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const SellListItem = ({ item }) => (
        <View style={styles.hostelContainer} key={item.title}>
            <Image source={{ uri: item.image }} style={styles.hostelImage} />
            <View style={styles.hostelInfo}>
                <Text style={styles.hostelName}>{item.title}</Text>
                <Text style={styles.hostelLocation}>{item.phoneNumber}</Text>
                <Text style={styles.hostelDesc}>{item.desc}</Text>
                <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Product</Text>
            </View>

            {/* Sell Product */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sell Product</Text>
                <FlatList
                    data={sell}
                    renderItem={SellListItem}
                    keyExtractor={item => item.title.toString()}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            </View>

            {/* Free Product */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Free Product</Text>
                <FlatList
                    data={free}
                    renderItem={FreeListItem}
                    keyExtractor={item => item.title.toString()}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 40,
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap:20
    },
    // hostelContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     width: 320,
    //     height: 210,
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     marginRight: 20,
    //     borderColor:"grey",
    //     backgroundColor:"black"
    // },
    hostelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width:320,
      height:210,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    padding:10
    
      
    },
    hostelImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    hostelInfo: {
        flex: 1,
        marginLeft: 10,
    },
    hostelName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    hostelLocation: {
        fontSize: 16,
        color: 'gray',
    },
    hostelPrice: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
    },
    hostelDesc: {
        fontSize: 16,
        color: 'black',
        marginTop: 5,
    },
    bookNowButton: {
        width: 100,
        height: 35,
        backgroundColor: 'orange',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    bookNowText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Product;
