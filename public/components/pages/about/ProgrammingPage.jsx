/*
 *  Programming Page
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

import programmingMP4 from './../../../videos/about/programming.mp4';

class ProgrammingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-programming">

        <BodySection
          title={
            <VideoTitle
              title="about.titles.programming" mp4={programmingMP4}
            />
          }
        >
          <p>{ Language.get("about.descriptions.programming") }</p>

          <div className="o-skill-box__container">
            <SkillBox language="csharp" />
            <SkillBox language="java" />
            <SkillBox language="javascript" />
            <SkillBox language="html" />
            <SkillBox language="php" />
            <SkillBox language="vb" />
            <SkillBox language="sql" />
            <SkillBox language="lua" />
            <SkillBox language="actionscript" />
            <SkillBox language="ruby" />
            <SkillBox language="python" />
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
export default connect(mapStateToProps)(ProgrammingPage);
