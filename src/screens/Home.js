import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';
import CurrentTime from '../components/CurrentTime.js';
import Map from '../components/Map.js';
import TitleText from '../components/TitleText.js';
import {COLORS} from '../theme/colors.js';
import {STYLES} from '../theme/styles.js';

function HomeScreen() {
  return (
    <ScrollView style={styles.mainContainer}>
      <TitleText text={'Bienvenido'} />
      <View style={styles.dateTimeContainer}>
        <CurrentTime />
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.background,
  },
  dateTimeContainer: {
    ...STYLES.card,
  },
  mapContainer: {
    height: 300,
    margin: 20,
    borderColor: COLORS.primary,
    borderWidth: 1,
    elevation: 10,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
