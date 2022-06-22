// Core Packages
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';

// Packages
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Imports
import {globalStyles} from '../../../utilities/styles.js/global';
import TextBold from '../../../common/TextBold';
import ImageScreen from './Image';

export default function ImageResultLists({loadMore, navigation}) {
  const {images} = useSelector(state => state.images);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderEmptyResult = () => {
    return (
      <View style={globalStyles.centerFlexOne}>
        <Icon name="sad-cry" size={34} color="black" />
        <TextBold value="No result found..." />
      </View>
    );
  };

  const renderImage = ({item}) => (
    <ImageScreen item={item} navigation={navigation} />
  );

  return (
    <View style={componentStyles.resultContainer}>
      {/* <Text>LENGTH: {images.length}</Text> */}
      {images.length > 0 ? (
        <FlatList
          data={images}
          renderItem={renderImage}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id.toString() + Math.random().toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          numColumns={3}
          onEndReached={({distanceFromEnd}) => {
            console.log('distanceFromEnd', distanceFromEnd);
            if (distanceFromEnd < 0) return;
            loadMore();
          }}
          onEndReachedThreshold={0.5}
        />
      ) : (
        renderEmptyResult()
      )}
    </View>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    flex: 1,
  },
});
