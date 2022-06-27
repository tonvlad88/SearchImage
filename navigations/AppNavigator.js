// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';

// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// Imports
import HomeScreen from '../src/screens/Home/HomeScreen';
import ImageDetailScreen from '../src/screens/ImageDetail/ImageDetailScreen';
import {Colors} from '../src/utilities/constants';

const ImagesStackNavigator = createSharedElementStackNavigator();

const defaultStyles = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontFamily: 'Comfortaa-Bold',
  },
};

const ImagesNavigator = () => {
  return (
    <ImagesStackNavigator.Navigator>
      <ImagesStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...defaultStyles,
          title: 'S E A R C H',
        }}
      />
      <ImagesStackNavigator.Screen
        name="ImageDetailScreen"
        component={ImageDetailScreen}
        options={{
          ...defaultStyles,
          title: 'Image Detail Screen',
        }}
      />
    </ImagesStackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ImagesNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
