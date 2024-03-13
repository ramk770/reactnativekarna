import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from "react-native-maps-directions"; // Correct import statement
import GOOGLE_MAP_KEY from "./googleapi";

function Googlemapview() {
 
  const [state, setState] = useState({
    pickupcords:{
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    drapupcords:{
      latitude: 30.733,
      longitude: 76.7794,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  const { pickupcords, drapupcords } = state;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={pickupcords}
        showsUserLocation={true}
      >
        <MapViewDirections
          origin={pickupcords}
          destination={drapupcords}
          apikey={GOOGLE_MAP_KEY}
          
        />
      </MapView>
    </View>
  );
}

export default Googlemapview;
