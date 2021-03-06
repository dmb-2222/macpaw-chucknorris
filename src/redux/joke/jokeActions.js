import types from '../types';

export const jokeDataFetchStart = () => ({
  type: types.JOKE_DATA_FETCH_START,
});
export const jokeDataFetchSuccess = (response, itemsFavorite) => ({
  type: types.JOKE_DATA_FETCH_SUCCESS,
  payload: { response, itemsFavorite },
});
export const jokeDataFetchError = error => ({
  type: types.JOKE_DATA_FETCH_ERROR,
  payload: { error },
});

// JOKE_ADD_IS_FAVORITE_FLAG: 'JOKE_ADD_IS_FAVORITE_FLAG',

export const jokeAddFlagIsFavorite = id => ({
  type: types.JOKE_ADD_IS_FAVORITE_FLAG,
  payload: id,
});
