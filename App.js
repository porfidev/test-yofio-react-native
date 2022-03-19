import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import usersReducer from './src/reducers/UsersReducer.js';
import HomeScreen from './src/screens/Home.js';

const Stack = createNativeStackNavigator();
const store = createStore(usersReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
