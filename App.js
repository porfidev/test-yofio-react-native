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
import {
  Button,
  Image,
  Linking,
  Pressable,
  Text,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import BackButton from './src/components/BackButton/BackButton.js';
import reducers from './src/reducers/index.js';
import rootSaga from './src/sagas/index.js';
import HomeScreen from './src/screens/Home.js';
import splash from './src/screens/Splash/assets/Splash.js';
import SplashScreen from './src/screens/Splash/assets/Splash.js';
import UserDetail from './src/screens/UserDetail.js';
import UsersScreen from './src/screens/Users.js';
import {LogBox} from 'react-native';
import {COLORS} from './src/theme/colors.js';
import {STYLES} from './src/theme/styles.js';

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
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator
          initialRouteName="Splash"
          screenOptions={{
            drawerActiveBackgroundColor: COLORS.background,
            drawerLabelStyle: {color: COLORS.title},
            drawerStyle: {backgroundColor: COLORS.primaryDark},
          }}>
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
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Inicio',
              headerStyle: {
                backgroundColor: COLORS.background,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Users"
            component={UsersScreen}
            options={{
              headerStyle: {
                backgroundColor: COLORS.background,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="UserDetail"
            component={UserDetail}
            options={({navigation, route}) => ({
              headerStyle: {
                backgroundColor: COLORS.background,
              },
              headerLeft: () => (
                <BackButton onPress={() => navigation.navigate('Users')} />
              ),
              headerTintColor: '#fff',
              headerTitleStyle: {
                display: 'none',
              },
              drawerItemStyle: {
                display: 'none',
              },
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
