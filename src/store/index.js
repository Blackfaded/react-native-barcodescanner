import { createStore, compose } from 'redux';
import { persistCombineReducers } from 'redux-persist';

import storage from 'redux-persist/es/storage';

import templatesReducer from './templates/reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = persistCombineReducers(persistConfig, {
  templates: templatesReducer
});

let composeEnhancers = compose;
/* eslint-disable-next-line no-undef */
if (__DEV__) {
  /* eslint-disable-next-line no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default (initialState = {}) => createStore(rootReducer, initialState, composeEnhancers());
