import React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../actions/UsersActions.js';

function HomeScreen({users, addUser}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify({users})}</Text>

      <Button
        title={`Add Friend`}
        onPress={() => addUser({name: 'Rumualdo'})}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({addUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
