
import { View, Dimensions } from 'react-native';
import Search from './Serach';

import Googlemapview from './Googlemapview';
import Googlemap from './Googlemap';

function Map() {
  

  return (
    <View style={{ flex: 1 }}>
     
    {/* <View style={{position:'absolute',zIndex:20}}>
          <Search  />      </View>  */}

       <Googlemap />
      
    </View>
  );
}

export default Map;



