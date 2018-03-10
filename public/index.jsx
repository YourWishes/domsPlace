'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';
import Styles from './styles/index.scss';
import rootReducer from './reducers/rootReducer';

//Create our store
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Render app and supply provider for store.
render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("app"));
