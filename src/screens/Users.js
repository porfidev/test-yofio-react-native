import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';
import {COLORS} from '../theme/colors.js';
import {STYLES} from '../theme/styles.js';

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
      <Pressable
        onPress={() => navigation.navigate('UserDetail', {user: item})}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: COLORS.cardBackground,
            marginVertical: 4,
            borderRadius: 10,
          }}>
          <Text style={{color: COLORS.cardText, fontSize: 18}}>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={users}
        renderItem={renderUser}
        refreshing={loading}
        onRefresh={init}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.background,
    height: '100%',
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

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
