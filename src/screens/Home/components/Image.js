// Core Packages
import React, {memo} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

// Packages
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../../../utilities/styles.js/global';
import {SharedElement} from 'react-navigation-shared-element';

// Imports

const ImageScreen = ({item, navigation}) => {
  const renderBrokenImage = () => {
    return (
      <View style={componentStyles.borderImage}>
        <Icon name="broken-image" size={90} color="black" />
      </View>
    );
  };

  const navigateToDetails = () => {
    navigation.navigate('ImageDetailScreen', {item});
  };

  if (item.userImageURL !== '') {
    return (
      <Pressable onPress={navigateToDetails}>
        <SharedElement id={`item.${item.id}.previewURL`}>
          <View style={componentStyles.imageContainer}>
            {/* <Text>{item.id}</Text> */}
            <Image
              style={componentStyles.tinyImage}
              source={{uri: item.largeImageURL}}
              resizeMode="cover"
            />
          </View>
        </SharedElement>
      </Pressable>
    );
  }

  return renderBrokenImage();
};

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

export default memo(ImageScreen);
