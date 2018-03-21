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
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import IndexPage from './components/pages/IndexPage';

import AboutPage from './components/pages/AboutPage';
import ProgrammingPage from './components/pages/about/ProgrammingPage';
import APIPage from './components/pages/about/APIPage';
import OtherSkillsPage from './components/pages/about/OtherSkillsPage';

import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

import ContactPage from './components/pages/ContactPage';

//App
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.historyListener = this.props.history.listen(this.onChange.bind(this));
  }

  onChange(location, action) {
    console.log("on change");
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="c-app">
        <Header />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/about/programming" component={ProgrammingPage} />
          <Route exact path="/about/api" component={APIPage} />
          <Route exact path="/about/other" component={OtherSkillsPage} />

          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route exact path="/privacy" component={PrivacyPolicyPage} />
          <Route exact path="/policy" component={PrivacyPolicyPage} />

          <Route exact path="/contact" component={ContactPage} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
