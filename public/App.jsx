/*
 *  App
 *    Overall App wrapper, contains a lot of the logic and handling of how the
 *    site will function and display.
 *
 *  Dependencies:
 *    styles/components/_app.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/23
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import IndexPage from './components/pages/IndexPage';
import ContactPage from './components/pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div className="c-app">
            <Header />

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>

            <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App;
