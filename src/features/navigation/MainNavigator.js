import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from 'core/components';
import { TabNavigator } from './TabNavigator';
import { DetailsScreen } from 'features/title-details';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Root">
    <Stack.Screen
      name="Root"
      component={TabNavigator}
      options={{ header: () => <Header /> }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        header: () => <Header canGoBack />,
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
    />
  </Stack.Navigator>
);
