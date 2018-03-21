'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App.jsx';
import Styles from './styles/index.scss';
import rootReducer from './reducers/rootReducer';

require('./../common/Object');
require('./../common/HTMLElement');

//Create our store
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Render app and supply provider for store.
render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById("app"));
