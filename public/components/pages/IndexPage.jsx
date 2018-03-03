/*
 *  Index Page
 *    Homepage.
 *
 *  Version:
 *    1.0.1 - 2018/03/01
 */

import React from 'react';

import Page from './../Page';
import Poly from './../sections/Poly';
import BodySection from './../sections/BodySection';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Poly />
        <BodySection>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </BodySection>
      </Page>
    )
  }
}

export default IndexPage;
