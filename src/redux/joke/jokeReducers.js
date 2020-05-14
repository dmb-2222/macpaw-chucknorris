/* eslint-disable no-underscore-dangle */
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
// const dataFavorites = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.JOKE_DATA_FAVORITES_FETCH_SUCCES:
//       return payload.response.totalBalance;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  dataJokes,
  // dataFavorites,
});
