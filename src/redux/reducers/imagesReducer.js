import {SET_IMAGES, SET_SELECTED_IMAGE} from '../types';

const initialState = {
  images: [],
  selectedImageId: '',
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case SET_SELECTED_IMAGE: {
      return {
        ...state,
        selectedImageId: action.payload,
      };
    }
    default:
      return state;
  }
};

export default imageReducer;
