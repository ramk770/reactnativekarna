import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../component/Home';
import Create from '../component/Create';
import Storedata from '../component/Storedata';
import Map from '../component/Map';
import Userpage from '../component/Userpage';
import Stacknav from './Stacknav';
import DetailNav from './detailNav';
import UserPageNav from './UserPageNav';
import Sellagriproduct from './Sellagriproduct';

const Tab = createBottomTabNavigator();

function Tabnav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Stacknav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Data"
        component={DetailNav}
        options={{
          tabBarLabel: 'CurrentFood',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Sellagriproduct}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserPageNav}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabnav;
