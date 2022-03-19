import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers/index.js';
import rootSaga from './src/sagas/index.js';
import HomeScreen from './src/screens/Home.js';

const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

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
