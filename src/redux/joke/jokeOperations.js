/* eslint-disable prefer-const */
import axios from 'axios';

import {
  jokeDataFetchStart,
  jokeDataFetchSuccess,
  jokeDataFetchError,
} from './jokeActions';

const baseURL = 'https://api.chucknorris.io/jokes/';

export const getRandomJokeDataFetch = () => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}random`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data));
    })
    .catch(error => jokeDataFetchError(error));
};

export const getJokeFromCategoryFetch = category => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}random?category=${category}`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data));
    })
    .catch(err => {
      dispatch(jokeDataFetchError(err));
    });
};

export const getJokeFromSearchInputFetch = query => dispatch => {
  dispatch(jokeDataFetchStart());
  axios
    .get(`${baseURL}search?query=${query}`)
    .then(joke => {
      dispatch(jokeDataFetchSuccess(joke.data.result));
    })
    .catch(err => {
      dispatch(jokeDataFetchError(err));
    });
};
