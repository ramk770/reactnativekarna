import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome from expo/vector-icons
import axios from 'axios';
import localhost from '../../confix';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:10,
    justifyContent: "space-between",
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // paddingVertical: 10,
    // paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain' // Adjust the resizeMode as needed
  },
});

const Notification = ({navigation}) => {

   
   const [notify, setnotify] = useState([]);
   const [veg, setveg] = useState([]);
   useEffect(() => {
    axios.get(`http://${localhost}/api/v1/nonveg`)
        .then(res => {
            
            setnotify(res.data.data.nonveg)
        })
        .catch(error => 
        console.log("hello",error) );
}, []);
  
useEffect(() => {
  axios.get(`http://${localhost}/api/v1/veg`)
      .then(res => {
          
          setveg(res.data.data.veg)
      })
      .catch(error => 
      console.log("hello",error) );
}, []);

  const renderItem = ({ item }) => (
    <View>
    <View style={styles.container} key={item.name}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri:item.image}} style={styles.image} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "800", lineHeight: 20, color: 'black' }}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: "300", lineHeight: 20, color: 'black' }}>{item.location}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:15,color:"black",fontWeight:"500"}}>rightNow {item.date}</Text>
        <View style={{flexDirection:"row",}}>
        <FontAwesome name='check' size={20} color="green" />
        <FontAwesome name='check' size={20} color="green" />
        </View>
        
      </View>
    </View>
    <Text  style={{
     marginBottom:2,
     borderBottomWidth: 2,
     borderBottomColor: '#ccc'
  }}>

  </Text>
    </View>
  );

  return (

 <View style={{flex:1}}>
    <View style={{backgroundColor:"orange",  }}>
    <View style={{  flexDirection: "row", paddingHorizontal: 20,marginTop: 40,gap:20 }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>Notification</Text>
    </View>
    <View style={{marginTop:10}}>

    </View>
    </View>
  <View style={{marginTop:10}}>
  <FlatList
      data={notify }
      renderItem={renderItem}
      keyExtractor={item => item.name.toString()}
    />
    
  </View>
  <FlatList
   data={veg}
   renderItem={renderItem}
   keyExtractor={item => item.name.toString()}
   />
    
    </View>
  );
};

export default Notification;


// import { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export default function Notification() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       }}>
//       <Text>Your expo push token: {expoPushToken}</Text>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Title: {notification && notification.request.content.title} </Text>
//         <Text>Body: {notification && notification.request.content.body}</Text>
//         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//       </View>
//       <Button
//         title="Press to schedule a notification"
//         onPress={async () => {
//           await schedulePushNotification();
//         }}
//       />
//     </View>
//   );
// }

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }