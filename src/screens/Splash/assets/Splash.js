import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
const logo = require('./awesome-test-logo.png');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: '#2D2C3C',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
