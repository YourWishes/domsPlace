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

import Background from './background/Background';
import Header from './header/Header';
import Footer from './footer/Footer';
import { HashRouter } from 'react-router-dom';
import Routes from './page/Routes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onEnteringBound = this.onEntering.bind(this);
  }

  onEntering() {
    this.refs.app.scroll({
      top:  0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    let clazz = "c-app";
    if(this.props.menuOpen) clazz += " is-menu-open "

    return (
      <HashRouter>
        <div className={clazz} ref="app">
          <Header />
          <Routes onEntering={this.onEnteringBound} />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    menuOpen: state.menu.open
  }
}

export default connect(mapStateToProps)(App);
