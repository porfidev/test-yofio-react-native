import React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';

function HomeScreen({users, addUser, apiUrl, getAllUsers}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text>Home Screen</Text>
      <Text>Users: {JSON.stringify(users)}</Text>
      <Text>APIUrl: {JSON.stringify(apiUrl)}</Text>

      <Button
        title={`Add Friend`}
        onPress={() => addUser({name: 'Rumualdo'})}
      />

      <Button title={`REQUEST ALL`} onPress={() => getAllUsers()} />
    </View>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
