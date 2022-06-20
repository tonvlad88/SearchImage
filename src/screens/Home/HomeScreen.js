// Core Packages
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';

// Packages
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

// Imports
import {getImages} from '../../redux/actions/imageActions';
import {Colors} from '../../utilities/constants';
import {globalStyles} from '../../utilities/styles.js/global';
import TextLight from '../../common/TextLight';
import ImageResultLists from './components/ImageResultList';

export default function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getImages(page, images => {
        setLoading(false);
      }),
    );
  }, [dispatch, page]);

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
        <TextInput style={componentStyles.textInput} />
      </View>
      <TextLight value="ALL RESULTS" style={{fontSize: 12, color: '#000'}} />
      <ImageResultLists loadMore={loadMoreHandler} />
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
    fontFamily: 'Comfortaa-Bold',
  },
  resultContainer: {
    flex: 1,
    marginTop: 10,
  },
});
