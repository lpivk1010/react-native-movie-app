import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, HomeScreen } from './fragments';
import { Header } from './components';

const Stack = createNativeStackNavigator();

export const Navigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ header: () => <Header /> }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ header: () => <Header canGoBack /> }}
    />
  </Stack.Navigator>
);
