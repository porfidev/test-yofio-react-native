import moment from 'moment/min/moment-with-locales.js';
import React, {useEffect, useState} from 'react';
import {NativeModules, Text, View} from 'react-native';
import {COLORS} from '../theme/colors.js';

const locale = NativeModules.I18nManager.localeIdentifier;
moment.locale(locale);

const CurrentTime = () => {
  const [time, setTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(moment().format('dddd DD MMMM'));
    const interval = setInterval(() => {
      setTime(moment().format('hh:mm:ss a'));
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View>
      <Text
        style={{
          color: COLORS.cardText,
          textAlign: 'center',
          fontSize: 24,
        }}>
        {currentDate}
      </Text>
      <Text style={{color: COLORS.cardText, textAlign: 'center', fontSize: 18}}>
        {time}
      </Text>
    </View>
  );
};

export default CurrentTime;
