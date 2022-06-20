// Core Packages
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function TextRegular({value, style}) {
  return (
    <TextInput style={[componentStyles.textinputStyle, style]}>
      {value}
    </TextInput>
  );
}

const componentStyles = StyleSheet.create({
  textinputStyle: {
    fontFamily: 'Comfortaa-Regular',
  },
});
