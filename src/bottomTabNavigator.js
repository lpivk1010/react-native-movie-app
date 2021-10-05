import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoritesScreen, HomeScreen, DetailsScreen } from './fragments';
import { Header } from './components';
import HomeSVG from './assets/images/home-svg';
import HeartSVG from './assets/images/heart-svg';

const Tab = createBottomTabNavigator();

const TAB_BAR_STYLE = {
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
};

export const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={TAB_BAR_STYLE}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ focused }) => <HomeSVG focused={focused} />,
        tabBarActiveTintColor: '#0B253F',
      }}
    />
    <Tab.Screen
      name="Favourites"
      component={FavoritesScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ focused }) => <HeartSVG focused={focused} />,
        tabBarActiveTintColor: '#0B253F',
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        header: () => <Header canGoBack />,
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
    />
  </Tab.Navigator>
);
