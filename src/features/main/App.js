import React from 'react';
import { StatusBar, UIManager } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from '../navigation';

import { Provider } from 'react-redux';
import { store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const persistor = persistStore(store);

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <MainNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
