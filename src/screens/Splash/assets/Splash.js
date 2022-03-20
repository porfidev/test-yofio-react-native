import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
const logo = require('./awesome-test-logo.png');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Bienvenida');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#2D2C3C',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image source={logo} />
      </View>
    </View>
  );
};

export default SplashScreen;
