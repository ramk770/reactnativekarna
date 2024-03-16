
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../component/Login';
import { useState } from 'react';
import Register from '../component/Register';
import Otpverfiy from '../component/Otpverify';
import Tabnav from './Tabnav';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import Context from "../component/Screen/Context";

import Multiplelng from '../component/multiplelng';
import SplashScreen from '../component/Screen/SplaceScreen';
import Welcomepage from '../component/Screen/Welcomepage';
const Stack = createStackNavigator();

function LoginStack() {
  const[user,setuser]=useState({user:"",email:""});
  return (
    <Context.Provider value={{user,setuser}}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
             {/* <Stack.Screen name="splace" component={SplashScreen} />
            <Stack.Screen name="welcome" component={Welcomepage} />
           <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register } />  
        <Stack.Screen name="Otpverify" component={ Otpverfiy} />     */}
      <Stack.Screen name='stack' component={Tabnav} />
    </Stack.Navigator>
    </Context.Provider>
  );
}

export default LoginStack;