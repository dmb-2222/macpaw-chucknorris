import { combineReducers } from 'redux';
import types from '../types';

const dataJokes = (state = [], { type, payload }) => {
  switch (type) {
    case types.JOKE_DATA_FETCH_SUCCESS:
      return Array.isArray(payload) ? [...payload] : [payload];
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
