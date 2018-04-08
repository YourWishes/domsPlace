/*
 *  Other Skills Page
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
import BodySection from './../../sections/BodySection';
import VideoTitle from './../../title/VideoTitle';
import SkillBox from './SkillBox';

import otherMP4 from './../../../videos/about/other.mp4';

class OtherSkillsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-other-skills">

        <BodySection
          title={
            <VideoTitle
              title="about.titles.other" mp4={otherMP4}
            />
          }
        >
          <p>{ Language.get("about.descriptions.other") }</p>

          <div className="o-skill-box__container">
            <SkillBox language="video" />
            <SkillBox language="animation" />
            <SkillBox language="graphics" />
            <SkillBox language="networking" />
            <SkillBox language="software" />
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
export default connect(mapStateToProps)(OtherSkillsPage);
