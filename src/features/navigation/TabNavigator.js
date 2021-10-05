import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'features/home';
import { FavoritesScreen } from 'features/favorites';

import HomeIcon from 'core/assets/svgs/home.svg';
import HomeIconFocused from 'core/assets/svgs/homeFocused.svg';
import HeartIcon from 'core/assets/svgs/heart.svg';
import HeartIconFocused from 'core/assets/svgs/heartFocusedDark.svg';

const Tab = createBottomTabNavigator();

const TAB_BAR_OPTIONS = {
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
};

const TAB_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: '#0B253F',
};

export const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={TAB_BAR_OPTIONS}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? <HomeIconFocused /> : <HomeIcon />,
        ...TAB_SCREEN_OPTIONS,
      }}
    />
    <Tab.Screen
      name="Favourites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? <HeartIconFocused /> : <HeartIcon />,
        ...TAB_SCREEN_OPTIONS,
      }}
    />
  </Tab.Navigator>
);
