import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';

const UserDetail = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <View>
      <Text>User Detail</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Correo: {user.email}</Text>
      <Text>Teléfono: {user.phone}</Text>
      <Text>Dirección:</Text>
      <View>
        {Object.keys(user.address).map(data => (
          <Text>
            {data}:{' '}
            {typeof user.address[data] === 'string' && user.address[data]}
          </Text>
        ))}
      </View>
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
