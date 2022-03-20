import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, getAllUsers} from '../actions/UsersActions.js';
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';



function HomeScreen({users, addUser, apiUrl, getAllUsers}) {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>{
      console.log(info.coords);
      setLocation(info.coords);
    });
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Text>Home Screen</Text>
      <Text>Users: {JSON.stringify(users)}</Text>
      <Text>APIUrl: {JSON.stringify(apiUrl)}</Text>


      <View style={{ width: '100%', height: 300, backgroundColor: 'pink'}}>
        <MapView
          style={{
              ...StyleSheet.absoluteFillObject,
            }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude : location.latitude , longitude : location.longitude }}
          />
        </MapView>
      </View>


      <Button
        title={`Add Friend`}
        onPress={() => addUser({name: 'Rumualdo'})}
      />

      <Button title={`REQUEST ALL`} onPress={() => getAllUsers()} />
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  apiUrl: state.apiUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addUser, getAllUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
