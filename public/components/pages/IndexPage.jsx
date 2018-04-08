/*
 *  Index Page
 *    Homepage.
 *
 *  Dependencies:
 *    styles/components/_page--style-index.scss
 *
 *  Version:
 *    1.0.1 - 2018/03/01
 */

import React from 'react';

import Page from './../Page';
import BodySection from './../sections/BodySection';
import SplitSection from './../sections/SplitSection';
import { connect } from 'react-redux';
import Language from './../../language/Language';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <SplitSection left={
            "test"
          } right={
            "tost"
          }
        />
        <BodySection>
          <h1>Lorem</h1>
        </BodySection>
      </Page>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(IndexPage);
