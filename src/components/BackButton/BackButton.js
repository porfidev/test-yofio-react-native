import React from 'react';
import {Image, Pressable} from 'react-native';
import {COLORS} from '../../theme/colors.js';
const backIcon = require('./assets/back-icon.png');

const BackButton = ({onPress}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => [
        {
          paddingVertical: 20,
          paddingHorizontal: 20,
          marginVertical: 4,
          borderRadius: 10,
          backgroundColor: pressed ? COLORS.primaryDark : 'transparent',
        },
      ]}>
      <Image source={backIcon} />
    </Pressable>
  );
};

export default BackButton;
