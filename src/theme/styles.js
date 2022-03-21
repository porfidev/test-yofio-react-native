import {COLORS} from './colors.js';
import {StyleSheet} from 'react-native';

export const STYLES = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    margin: 20,
    borderColor: COLORS.primary,
    borderWidth: 1,
    elevation: 10,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mgTop20: {
    marginTop: 20,
  },
});
