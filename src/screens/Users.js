import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers} from '../actions/UsersActions.js';
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
        style={({pressed}) => [
          {
            paddingVertical: 20,
            paddingHorizontal: 20,
            marginVertical: 4,
            borderRadius: 10,
            backgroundColor: pressed ? 'gray' : COLORS.cardBackground,
          },
        ]}
        onPress={() => navigation.navigate('UserDetail', {user: item})}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{color: COLORS.cardText, fontSize: 18, fontWeight: 'bold'}}>
            {item.name}
          </Text>

          <View>
            <Image
              source={{uri: 'https://i.pravatar.cc/150?img=' + item.id}}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
          </View>
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
