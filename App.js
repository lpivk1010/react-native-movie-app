import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator';
import { TabNavigator } from './src/bottomTabNavigator';

import { Provider } from 'react-redux';
import { store } from './src/redux';

export const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <TabNavigator />
    </Provider>
  </NavigationContainer>
);
