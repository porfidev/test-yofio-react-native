import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, FlatList, Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';

const UsersScreen = ({navigation, getAllUsers, users}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      init();
    }, []),
  );

  const init = () => {
    setLoading(true);
    getAllUsers();
    setLoading(false);
  };

  const renderUser = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate('Detalle', {user: item})}>
        <Text>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <Text>Usuarios {users.length}</Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        refreshing={loading}
        onRefresh={init}
      />
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
  bindActionCreators({getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
