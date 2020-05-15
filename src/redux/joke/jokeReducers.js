import { combineReducers } from 'redux';
import types from '../types';

const dataJokes = (state = [], { type, payload }) => {
  switch (type) {
    case types.JOKE_DATA_FETCH_SUCCESS:
      // Whithot flag fav
      // return Array.isArray(payload) ? [...payload] : [payload];
      return Array.isArray(payload)
        ? payload.map(item => ({ fav: false, ...item }))
        : [payload].map(item => ({ fav: false, ...item }));
    case types.JOKE_ADD_IS_FAVORITE_FLAG:
      return payload.items.map(item =>
        item.id === payload.id ? { ...item, fav: !item.fav } : item,
      );
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.JOKE_DATA_FETCH_START:
      return true;
    case types.JOKE_DATA_FETCH_SUCCESS:
    case types.JOKE_DATA_FETCH_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  dataJokes,
  loading: loadingReducer,
});
