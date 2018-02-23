'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';

import App from './App.jsx';
import Styles from './styles/index.scss';

render((
  <App />
), document.getElementById("app"));
