// Core Packages
import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function TextLight({value, style}) {
  return <Text style={[componentStyles.textStyle, style]}>{value}</Text>;
}

const componentStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Comfortaa-Light',
  },
});
