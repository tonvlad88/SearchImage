// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// Packages
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../../../utilities/styles.js/global';

// Imports

export default function ImageScreen({item, navigation}) {
  const renderBrokenImage = () => {
    return (
      <View style={componentStyles.borderImage}>
        <Icon name="broken-image" size={90} color="black" />
      </View>
    );
  };

  const navigateToDetails = () => {
    navigation.navigate('ImageDetailScreen');
  };

  if (item.userImageURL !== '') {
    return (
      <TouchableOpacity onPress={navigateToDetails}>
        <View style={componentStyles.imageContainer}>
          {/* <Text>{item.id}</Text> */}
          <Image
            style={componentStyles.tinyImage}
            source={{uri: item.previewURL}}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return renderBrokenImage();
}

const componentStyles = StyleSheet.create({
  imageContainer: {
    marginVertical: 5,
  },
  tinyImage: {
    width: 100,
    height: 100,
  },
  borderImage: {
    borderWidth: 1,
    width: 100,
    height: 100,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c9c9c9',
  },
});
