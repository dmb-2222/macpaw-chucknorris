/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'favoriteLS',
  storage,
  whitelist: ['favorite'],
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persisterReducer, enhancer);
export const persistor = persistStore(store);
