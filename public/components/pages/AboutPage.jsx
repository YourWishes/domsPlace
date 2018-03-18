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

import Language from './../../language/Language';

import Page from './../Page';
import BlankPromo from './../sections/BlankPromo';
import BodySection from './../sections/BodySection';
import SplitSection from './../sections/SplitSection';
import VideoTitle from './../title/VideoTitle';
import Window95 from './../w95/Window95';

import domsHead from './../../images/profile.png';
import aboutMP4 from './../../videos/about/about.mp4';
import programmingMP4 from './../../videos/about/programming.mp4';
import apiMP4 from './../../videos/about/api.mp4';
import otherMP4 from './../../videos/about/other.mp4';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-about">
        <BlankPromo />

        {/* Bio */}
        <SplitSection
          className="c-page--style-about__bio-section"

          leftClass="c-page--style-about__profile-container"
          left={ <img src={domsHead} className="c-page--style-about__profile" /> }

          right={
            <Window95 title="Bio" className="c-window--style-about">
              <div className="c-text-field">
                <p>{ Language.get("about.descriptions.welcome") }</p>
              </div>
            </Window95>
          }
          rightClass="c-page--style-about__blurb"
        />

        {/* About Me */}
        <BodySection
          className="c-about-page__body-section"
          title={
            <VideoTitle
              title="about.titles.me" mp4={aboutMP4}
            />
          }
        >
          { Language.get("about.descriptions.me") }
        </BodySection>

        {/*  Programming */}
        <BodySection className="c-about-page__body-section" title={[
          <VideoTitle title="about.titles.programming" mp4={programmingMP4} to="/about/programming" />,
          <VideoTitle title="about.titles.apis" mp4={apiMP4} />,
          <VideoTitle title="about.titles.other" mp4={otherMP4} />
        ]}></BodySection>
      </Page>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(AboutPage);
