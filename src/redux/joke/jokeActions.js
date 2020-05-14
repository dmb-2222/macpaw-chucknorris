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
