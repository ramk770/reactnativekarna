import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Userpage from '../component/Userpage';
import Termsconditions from '../component/Screen/Terms&conditions';
import UserEdit from '../component/Screen/UserEdit';
import ProfileView from '../component/ProfileView';


const Stack = createStackNavigator();
function UserPageNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
    <Stack.Screen name='user' component={Userpage} />
    <Stack.Screen name='terms' component={Termsconditions} />
    <Stack.Screen name='edit' component={UserEdit} />
    <Stack.Screen name='expoler' component={ProfileView} />
   </Stack.Navigator>
  )
}

export default UserPageNav
