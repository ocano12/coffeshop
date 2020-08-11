import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import coffeeCounter from './coffee-counter/coffee-counter';
import thunk from 'redux-thunk';
import { create } from 'react-test-renderer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  coffeeCounter,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
