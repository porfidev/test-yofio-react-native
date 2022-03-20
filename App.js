import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Linking, Text, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers/index.js';
import rootSaga from './src/sagas/index.js';
import HomeScreen from './src/screens/Home.js';
import splash from './src/screens/Splash/assets/Splash.js';
import SplashScreen from './src/screens/Splash/assets/Splash.js';
import UserDetail from './src/screens/UserDetail.js';
import UsersScreen from './src/screens/Users.js';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const customColorsTheme = {
  ...DarkTheme,
};

function CustomDrawerContent(props) {
  console.log(JSON.stringify(props.state, null, 2));

  const newProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: [...props.state.routeNames.filter(name => name !== 'Splash')],
      routes: [...props.state.routes.filter(route => route.name !== 'Splash')],
    },
  };

  console.log(JSON.stringify(newProps, null, 2));
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator initialRouteName="Splash">
          <Drawer.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              header: () => {},
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Bienvenida"
            component={HomeScreen}
            options={{headerTitle: ''}}
          />
          <Drawer.Screen name="Usuarios" component={UsersScreen} />
          <Drawer.Screen
            name="Detalle"
            component={UserDetail}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
