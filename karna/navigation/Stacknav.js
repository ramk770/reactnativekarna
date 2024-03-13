
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../component/Home';


import DonarNonveg from '../component/Screen/DonarNonveg';
import DonarPage from '../component/Screen/DonarPage';

import ReciverPage from '../component/Screen/ReciverPage';
import DonarVegcreate from '../component/Screen/DonarVegcreate';
import Wastedfood from '../component/Screen/Wastedfood';
import Detailpage from '../component/Detailpage';
import Notification from '../component/Screen/Notification';
import FeedBack from '../component/FeedBack';
import Reciverdetails from '../component/Screen/Reciverdetails';
import FeedbackView from '../component/FeedbackView';
import Helpdetails from '../component/Agri/Helpdetails';
import KarnaFeature from '../component/Agri/KarnaFeature';
import Srttingsdetails from '../component/Agri/Srttingsdetails';
import Metadata from '../component/Agri/Metadata';


const Stack = createStackNavigator();

function Stacknav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='veg' component={DonarVegcreate} />
      <Stack.Screen name='nonveg' component={DonarNonveg} />
      <Stack.Screen name='donarPage' component={DonarPage} />
     <Stack.Screen name='reciver' component={ReciverPage} />
     <Stack.Screen name='wasted' component={Wastedfood} />
     <Stack.Screen name='showreciver' component={Detailpage} />
     <Stack.Screen name='notifi' component={Notification} />
     <Stack.Screen name='Feedback' component={FeedBack} />
     <Stack.Screen name='view' component={Reciverdetails} />
     <Stack.Screen name="feedbackview" component={ FeedbackView} />
     <Stack.Screen name='hlep' component={Helpdetails} />
     <Stack.Screen name='karnafeature' component={KarnaFeature} />
     <Stack.Screen name='setting' component={Srttingsdetails} />
     <Stack.Screen name='meta' component={Metadata} />
  
    </Stack.Navigator>
  );
}

export default Stacknav;
