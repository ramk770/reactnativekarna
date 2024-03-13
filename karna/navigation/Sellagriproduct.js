import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Create from '../component/Create';
import Sellproduct from '../component/Agri/Sellproduct';
import EnterSelling from '../component/Agri/EnterSelling';
import Enterfree from '../component/Agri/Enterfree';
import Product from '../component/Agri/Product';
import Freeagri from '../component/Agri/Freeproduct';
import Category from '../component/Agri/Category';
import AgriDetailspage from '../component/AgriDetailspage';
import Successfull from '../component/Screen/Successfull';
import AgriNotification from '../component/Agri/AgriNotification';



const Stack = createStackNavigator();
function Sellagriproduct() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
    <Stack.Screen name='agri' component={Create} />
    <Stack.Screen name='free' component={Freeagri} />
    <Stack.Screen name='sell' component={Sellproduct} />
    <Stack.Screen name='entersellpage' component={EnterSelling} />
    <Stack.Screen name='freepage' component={Enterfree} />
    <Stack.Screen name='product' component={Product} />
    <Stack.Screen name='list' component={Category} />
    <Stack.Screen name='display' component={AgriDetailspage} />
    <Stack.Screen name='book' component={Successfull} />
    <Stack.Screen name='notify' component={AgriNotification} />
    
   </Stack.Navigator>

   
  )
}
export default Sellagriproduct