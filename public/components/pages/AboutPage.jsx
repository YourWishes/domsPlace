/*
 *  About Page
 *    About that one lad.
 *
 *  Dependencies:
 *    styles/components/_page--style-about.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/18
 */

import React from 'react';
import { connect } from 'react-redux';

import Page from './../Page';
import TitleSection from './../sections/TitleSection';
import BodySection from './../sections/BodySection';

import AboutScene from './../../3d/scenes/AboutScene';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-about">
        <TitleSection
          title="about.titles.me"
          scene={<AboutScene />}
        />
        <BodySection>
          Test
        </BodySection>
      </Page>
    );
  }
}

export default AboutPage;
