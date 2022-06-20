import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import imageReducer from '../reducers/imagesReducer';

const rootReducer = combineReducers({
  images: imageReducer,
});

export default store = createStore(rootReducer, applyMiddleware(thunk));
