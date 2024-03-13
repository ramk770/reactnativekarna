import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

function Successfull({navigation}) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 3 * 60 * 1000); // 3 minutes in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showAnimation && (
        <View style={{ flex: 1, marginTop: 50 }}>
          <LottieView style={{ flex: 1 }} source={require('../../assets/success.json')} autoPlay />
          <View style={{alignItems:"center",justifyContent:"center"}}>
           <Button title="Done"  color="orange" onPress={() => navigation.goBack()}/>
           </View>
        </View>
      )}
    </>
  );
}

export default Successfull;
