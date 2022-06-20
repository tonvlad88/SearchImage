// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';

// Packages

// Imports
import TextBold from './common/TextBold';

export default function MainApp() {
  const [images, setImages] = useState([]);

  const renderEmptyResult = () => {
    return (
      <View style={componentStyles.emptyResultContainer}>
        <TextBold value="No results found..." />
      </View>
    );
  };
  return (
    <SafeAreaView style={componentStyles.container}>
      <View style={componentStyles.content}>
        <View style={componentStyles.titleContainer}>
          <TextBold value="Search" style={{fontSize: 36, color: '#000'}} />
        </View>
        <View style={componentStyles.textInputContainer}>
          <TextInput style={componentStyles.textInput} />
        </View>
        <View style={componentStyles.resultContainer}>
          {images.length > 0 ? (
            <Text style={{color: '#000'}}>naa</Text>
          ) : (
            renderEmptyResult()
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  content: {flex: 1},
  titleContainer: {},
  textInputContainer: {
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  textInput: {
    fontFamily: 'Comfortaa-Bold',
  },
  resultContainer: {
    flex: 1,
    marginTop: 10,
  },
  emptyResultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
