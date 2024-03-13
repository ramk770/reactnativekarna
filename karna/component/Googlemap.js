import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import UserLocationContext from "./Screen/Context";
function Googlemap() {
    const { location } = useContext(UserLocationContext); // Assuming UserLocationContext is defined somewhere
    const [mapRegion, setMapRegion] = useState(null);

    useEffect(() => {
        if (location) {
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0422,
                longitudeDelta: 0.0421,
            });
        }
    }, [location]);

    return (
        <View style={{ flex: 1, }}>
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}
            >
                {mapRegion && (
                    <Marker
                        title="You"
                        coordinate={{
                            latitude: mapRegion.latitude,
                            longitude: mapRegion.longitude,
                        }}
                    />
                )}
            </MapView>
        </View>
    );
}

export default Googlemap;
