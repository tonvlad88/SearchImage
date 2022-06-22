// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

// Packages
import {SharedElement} from 'react-navigation-shared-element';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Imports
import TextBold from '../../common/TextBold';
import TextLight from '../../common/TextLight';
import TextRegular from '../../common/TextRegular';

const {height, width} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.7;

const ImageDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={componentStyles.container}>
      <SharedElement id={`item.${item.id}.previewURL`}>
        <Image
          source={{
            uri: item.largeImageURL,
          }}
          style={componentStyles.imageStyle}
          resizeMode="cover"
        />
      </SharedElement>
      <View style={componentStyles.detailContainer}>
        <View style={componentStyles.authorContainer}>
          <Image
            source={{uri: item.userImageURL}}
            style={componentStyles.authorImage}
          />
          <View style={componentStyles.authorDetails}>
            <TextBold value={item.user} style={componentStyles.authorName} />
            <TextLight value={item.tags} style={componentStyles.tags} />
          </View>
        </View>
        <View style={componentStyles.countContainer}>
          <View style={componentStyles.countItemContainer}>
            <MaterialCommunityIcons name="eye" size={24} color="black" />
            <TextRegular value={item.views} />
          </View>
          <View style={componentStyles.countItemContainer}>
            <AntDesign name="like1" size={24} color="black" />
            <TextRegular value={item.likes} />
          </View>
          <View style={componentStyles.countItemContainer}>
            <Feather name="download" size={24} color="black" />
            <TextRegular value={item.likes} />
          </View>
          <View style={componentStyles.countItemContainer}>
            <FontAwesome name="comments" size={24} color="black" />
            <TextRegular value={item.comments} />
          </View>
        </View>
      </View>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    borderWidth: 1,
    width,
    height: ITEM_HEIGHT,
  },
  detailContainer: {
    flex: 1,
    margin: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  authorDetails: {
    marginHorizontal: 10,
  },
  authorName: {
    fontSize: 18,
  },
  tags: {
    fontSize: 12,
    marginTop: -4,
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  countItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ImageDetailScreen.sharedElements = route => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}.previewURL`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default ImageDetailScreen;
