import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';

const UserDetail = () => {
  return (
    <View>
      <Text>User Detail</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
