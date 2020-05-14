import { combineReducers } from 'redux';
import jokes from './joke/jokeReducers';

const rootReducer = combineReducers({ jokes });

export default rootReducer;
