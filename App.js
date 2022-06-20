// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';

// Packages
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Imports
import MainApp from './src/App';
import AppNavigator from './navigations/AppNavigator';

export default function App() {
  const [images, setImages] = useState([]);

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
