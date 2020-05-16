/* eslint-disable prefer-const */
import axios from 'axios';

import {
  jokeDataFetchStart,
  jokeDataFetchSuccess,
  jokeDataFetchError,
} from './jokeActions';

const baseURL = 'https://api.chucknorris.io/jokes/';

export const getRandomJokeDataFetch = itemsFavorite => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}random`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data, itemsFavorite));
    })
    .catch(error => jokeDataFetchError(error));
};

export const getJokeFromCategoryFetch = (
  category,
  itemsFavorite,
) => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}random?category=${category}`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data, itemsFavorite));
    })
    .catch(err => {
      dispatch(jokeDataFetchError(err));
    });
};

export const getJokeFromSearchInputFetch = (
  query,
  itemsFavorite,
) => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}search?query=${query}`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data.result, itemsFavorite));
    })
    .catch(err => {
      dispatch(jokeDataFetchError(err));
    });
};
