import { combineReducers } from 'redux';
import jokes from './joke/jokeReducers';
import favorite from './favorite/favoriteReducer';

const rootReducer = combineReducers({ jokes, favorite });

export default rootReducer;
