import AsyncStorage from '@react-native-async-storage/async-storage';

import {SET_IMAGES, SET_SELECTED_IMAGE} from '../types';
import {STORAGE_KEYS} from '../../utilities/constants';
import store from '../store';

// Imports
import {APIs} from '../../utilities/APIs';

// Get images action
export const getImages = (page, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const {images} = store.getState().images;

      const imagesCopy = [...images];
      const imagesRes = await APIs.getImages('', page);
      const finalRes =
        imagesRes.hits.length > 0 ? images.concat(imagesRes.hits) : imagesCopy;
      dispatch({
        type: SET_IMAGES,
        payload: finalRes,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Get images action by keyword
export const getImagesByKeyword = (
  keyword,
  page,
  onSuccess = () => {},
  onError = () => {},
) => {
  return async dispatch => {
    try {
      const {images} = store.getState().images;

      const imagesCopy = page > 1 ? [...images] : [];
      const imagesRes = await APIs.getImages(keyword.replace(/ /g, '+'), page);
      const finalRes =
        imagesRes.hits.length > 0
          ? imagesCopy.concat(imagesRes.hits)
          : imagesCopy;
      dispatch({
        type: SET_IMAGES,
        payload: finalRes,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Create list action

export const getImageDetails = (
  id,
  onSuccess = () => {},
  onError = () => {},
) => {
  return async dispatch => {
    try {
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};
