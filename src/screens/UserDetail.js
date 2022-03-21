import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';
import {COLORS} from '../theme/colors.js';
import {STYLES} from '../theme/styles.js';

const UserDetail = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <ScrollView style={{backgroundColor: COLORS.background}}>
      <View
        style={{
          ...STYLES.card,
          padding: 20,
        }}>
        <View
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            backgroundColor: 'white',
            elevation: 10,
          }}>
          <Image
            source={{uri: `https://i.pravatar.cc/150?img=${user.id}`}}
            style={{
              width: 140,
              height: 140,
              borderRadius: 140 / 2,
            }}
          />
        </View>

        <View style={{marginTop: 40, width: '100%'}}>
          <Text
            style={{
              color: COLORS.cardText,
              textAlign: 'center',
              fontSize: 24,
              paddingBottom: 20,
            }}>
            {user.name}
          </Text>
          <Text style={{color: COLORS.cardText}}>
            Correo: <Text style={{fontWeight: 'bold'}}>{user.email}</Text>
          </Text>
          <Text style={{color: COLORS.cardText}}>
            Teléfono: <Text style={{fontWeight: 'bold'}}>{user.phone}</Text>
          </Text>
          <Text style={{color: COLORS.cardText}}>Dirección:</Text>
          <View style={{paddingLeft: 20}}>
            {Object.keys(user.address)
              .filter(data => data !== 'geo')
              .map((data, index) => (
                <Text
                  key={index}
                  style={{color: COLORS.cardText, fontWeight: 'bold'}}>
                  {typeof user.address[data] === 'string' && user.address[data]}
                </Text>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
