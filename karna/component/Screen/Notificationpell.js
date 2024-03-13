import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons

const Notificationpell = ({ notificationCount }) => {
    return (
        <View>
            <FontAwesome name='bell' size={25} color="black" style={{padding: 5}} />
            {notificationCount > 0 && (
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: 50,
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: 5,
                    top: 5
                }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{notificationCount > 99 ? '99+' : notificationCount}</Text>
                </View>
            )}
        </View>
    );
};

export default Notificationpell;
