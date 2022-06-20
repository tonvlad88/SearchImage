// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Packages

// Imports

export default function ImageDetailScreen() {
  return (
    <View style={componentStyles.container}>
      <Text>Image detail screen</Text>
    </View>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
