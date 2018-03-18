/*
 *  API Page
 *    About that one lad.
 *
 *  Dependencies:
 *
 *  Version:
 *    1.0.0 - 2018/03/18
 */
import React from 'react';
import { connect } from 'react-redux';

import Language from './../../../language/Language';

import Page from './../../Page';
import Poly from './../../sections/Poly';
import BodySection from './../../sections/BodySection';
import VideoTitle from './../../title/VideoTitle';
import SkillBox from './SkillBox';

import apiMP4 from './../../../videos/about/api.mp4';

class APIPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-api-skills">
        <Poly />

        <BodySection
          title={
            <VideoTitle
              title="about.titles.apis" mp4={apiMP4}
            />
          }
        >
          <p>{ Language.get("about.descriptions.apis") }</p>

          <div className="o-skill-box__container">
            <SkillBox language="gl" />
            <SkillBox language="node" />
            <SkillBox language="react" />
            <SkillBox language="shopify" />
            <SkillBox language="neto" />
            <SkillBox language="jquery" />
            <SkillBox language="nodecg" />
            <SkillBox language="phonegap" />
            <SkillBox language="other" />
          </div>
        </BodySection>
      </Page>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}
export default connect(mapStateToProps)(APIPage);
