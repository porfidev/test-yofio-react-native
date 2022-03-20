import React from 'react';
import PropTypes from 'prop-types';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';

const UsersScreen = ({navigation}) => {
  return (
    <View>
      <Text>Usuarios</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
};

UsersScreen.propTypes = {};

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
