import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/colors.js';
import {STYLES} from '../theme/styles.js';

const TitleText = ({text}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    ...STYLES.alignCenter,
    ...STYLES.mgTop20,
  },
  titleText: {
    fontSize: 38,
    color: COLORS.title,
  },
});
export default TitleText;
