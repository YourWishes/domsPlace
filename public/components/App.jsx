// Copyright (c) 2018 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import Styles from './App.scss';

import Header from './header/Header';
import Footer from './footer/Footer';
import Routes, { RouteWrapper } from './page/route/Routes';
import Favicon from './Favicon';

//Routes Definitions
const AppRoutes = (props) => {
  return (
    <Routes onEntering={ props.onEntering }>
      <RouteWrapper exact path="/" page={ () => import('@pages/home/HomePage') } />
      <RouteWrapper exact path="/contact" page={ () => import ('@pages/contact/ContactPage') } />
      <RouteWrapper exact path="/legal/privacy" page={ () => import('@pages/legal/privacy/PrivacyPolicyPage') } />
    </Routes>
  );
};


//Main App Wrapper
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onEntering() {
    this.refs.app.scroll({
      top:  0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    let newProps=  {...this.props};
    let { className, modal } = newProps;
    ["dispatch"].forEach(e => delete newProps[e]);

    //Generate base clazzes
    let clazz = "c-app";

    //Append any other clazzes there may be.
    if(modal.open) clazz += ' is-modal-open';
    if(className) clazz += ` ${className}`;

    //For testing you can switch the router type
    let RouterType = BrowserRouter;
    console.log(process.env.NODE_ENV);
    if(true) RouterType = HashRouter;

    return (
      <RouterType>
        <div {...newProps} className={ clazz } ref="app">
          { modal.modal }
          <Favicon />
          <Header />
          <main>
            <AppRoutes onEntering={ () => this.onEntering() } />
          </main>
          <Footer />
        </div>
      </RouterType>
    );
  }
}

export default connect(state => {
  return { modal: state.modal };
})(App);
