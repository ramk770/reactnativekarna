
import { createStackNavigator } from '@react-navigation/stack';

import Storedata from '../component/Storedata';
import Detailpage from '../component/Detailpage';
import Vegpage from '../component/Screen/Vegpage';
import NonVegpage from '../component/Screen/NonVegpage';
import Seeallfood from '../component/Screen/Seeallfood';
import Alldata from '../component/Screen/Alldata';
import Successfull from '../component/Screen/Successfull';
import Notification from '../component/Screen/Notification';


const Stack = createStackNavigator();

function DetailNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
     <Stack.Screen name='value' component={Storedata} />
     <Stack.Screen name='detail' component={Detailpage} />
     <Stack.Screen name='veg' component={Vegpage} />
     <Stack.Screen name='nonveg' component={NonVegpage} />
     <Stack.Screen name='category' component={Seeallfood} />
     <Stack.Screen name='all' component={Alldata} />
     <Stack.Screen name='success' component={Successfull} />
     <Stack.Screen name='pell' component={Notification} />
    </Stack.Navigator>
  );
}

export default DetailNav;
