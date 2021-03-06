// Core Packages
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';

// Packages
import {useDispatch} from 'react-redux';

// Imports
import {getImages, getImagesByKeyword} from '../../redux/actions/imageActions';
import {Colors} from '../../utilities/constants';
import {globalStyles} from '../../utilities/styles.js/global';
import TextBold from '../../common/TextBold';
import ImageResultLists from './components/ImageResultList';

var timer = null;

export default function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword == '') {
      setPage(1);
    }
    const delayDebounceFn = setTimeout(() => {
      dispatch(
        getImagesByKeyword(keyword, page, images => {
          setLoading(false);
        }),
      );
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [keyword, page]);

  if (loading) {
    return (
      <View style={globalStyles.centerFlexOne}>
        <Text>
          <ActivityIndicator color={Colors.primary} />
        </Text>
      </View>
    );
  }

  const loadMoreHandler = () => {
    setPage(page + 1);
  };

  return (
    <View style={componentStyles.container}>
      <View style={componentStyles.textInputContainer}>
        <TextInput
          placeholder="Enter keyword here..."
          style={componentStyles.textInput}
          onChangeText={setKeyword}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <TextBold value="ALL RESULTS" style={{fontSize: 12, color: '#000'}} />
      </View>

      <ImageResultLists loadMore={loadMoreHandler} navigation={navigation} />
    </View>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textInputContainer: {
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  textInput: {
    // fontFamily: 'Comfortaa-Bold',
    paddingHorizontal: Platform.OS == 'ios' ? 10 : 10,
    paddingVertical: Platform.OS == 'ios' ? 20 : 10,
  },
  resultContainer: {
    flex: 1,
    marginTop: 10,
  },
});
