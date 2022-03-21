import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [hasGPSPermission, setHasGPSPermission] = useState(false);

  useEffect(() => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(hasPersmission => {
      if (hasPersmission) {
        Geolocation.getCurrentPosition(info => {
          setLocation({
            ...location,
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
          });
        });
      } else {
        setLocation({...location, latitude: 0, longitude: 0});
      }
      setHasGPSPermission(hasPersmission);
    });
  }, []);

  return hasGPSPermission ? (
    <MapView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsUserLocation={true}
      initialRegion={{...location}}
      region={{...location}}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  ) : (
    <View>
      <Text>Permita el uso de su ubicación para ver el mapa</Text>
    </View>
  );
};

export default Map;
