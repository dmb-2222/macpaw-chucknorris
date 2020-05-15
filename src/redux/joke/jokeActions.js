import types from '../types';

export const jokeDataFetchStart = () => ({
  type: types.JOKE_DATA_FETCH_START,
});
export const jokeDataFetchSuccess = response => ({
  type: types.JOKE_DATA_FETCH_SUCCESS,
  payload: response,
});
export const jokeDataFetchError = error => ({
  type: types.JOKE_DATA_FETCH_ERROR,
  payload: { error },
});

// JOKE_ADD_IS_FAVORITE_FLAG: 'JOKE_ADD_IS_FAVORITE_FLAG',

export const jokeAddFlagIsFavorite = (items, id) => ({
  type: types.JOKE_ADD_IS_FAVORITE_FLAG,
  payload: { items, id },
});
