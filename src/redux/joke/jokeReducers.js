import { combineReducers } from 'redux';
import types from '../types';
import ifMatchSerchWithFavorite from '../../helpers/checkToMutchUpLocalStoreAndFavorites';

const dataJokes = (state = [], { type, payload }) => {
  switch (type) {
    case types.JOKE_DATA_FETCH_SUCCESS:
      return ifMatchSerchWithFavorite(payload.response, payload.itemsFavorite);
    case types.JOKE_ADD_IS_FAVORITE_FLAG:
      return state.map(item =>
        item.id === payload ? { ...item, fav: !item.fav } : item,
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
