/*
 *  About Page
 *    About that one lad.
 *
 *  Dependencies:
 *    styles/components/_page--style-about.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/11
 */

import React from 'react';
import { connect } from 'react-redux';

import Page from './../Page';
import Poly from './../sections/Poly';
import BodySection from './../sections/BodySection';
import SplitSection from './../sections/SplitSection';
import Language from './../../language/Language';

class TestAboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-about">
        About
      </Page>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(TestAboutPage);
