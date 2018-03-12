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

import Page from './../Page';
import BlankPromo from './../sections/BlankPromo';
import BodySection from './../sections/BodySection';
import SplitSection from './../sections/SplitSection';
import { connect } from 'react-redux';
import Language from './../../language/Language';

import Window95 from './../w95/Window95';

import domsHead from './../../images/profile.png';

const ProgrammingBox = function(props) {
  return (
    <div className="c-page--style-about__language">
      <h2 className="c-page--style-about__language-heading">
        {Language.get("about."+props.language+".name")}
      </h2>
      <p className="c-page--style-about__language-description">
        {Language.get("about."+props.language+".description")}
      </p>
    </div>
  )
}

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="c-page--style-about">
        <BlankPromo />

        <SplitSection
          leftClass="c-page--style-about__profile-container"
          left={ <img src={domsHead} className="c-page--style-about__profile" /> }

          right={ <p>{Language.get("about.descriptions.welcome")}</p> }
          rightClass="c-page--style-about__blurb"
          full
        />


        <SplitSection
          leftClass="c-page--style-about__window-container"
          left={
            <Window95 menu={[]} title={Language.get("about.titles.me")} className="c-page--style-about__window">
              <div className="c-text-field c-page--style-about__window-text">
                { Language.get("about.descriptions.me") }
              </div>
            </Window95>
          }

          rightClass="c-page--style-about__window-container"
          right={ <div></div> }
          full
        />


        <BodySection>
          <h1>{Language.get("about.titles.me")}</h1>
          <p>
            { Language.get("about.descriptions.me") }
          </p>

          <h2 className="c-page--style-about__subheading">
            { Language.get("about.titles.programming")}
          </h2>
          <p>{ Language.get("about.descriptions.programming")}</p>

          <div className="c-page--style-about__language-container">
            <ProgrammingBox language="C#" />
            <ProgrammingBox language="Java" />
            <ProgrammingBox language="Javascript" />
            <ProgrammingBox language="HTML" />
            <ProgrammingBox language="PHP" />
            <ProgrammingBox language="VB" />
            <ProgrammingBox language="SQL" />
            <ProgrammingBox language="Lua" />
            <ProgrammingBox language="ActionScript" />
            <ProgrammingBox language="Ruby" />
            <ProgrammingBox language="Python" />
          </div>

          <h2 className="c-page--style-about__subheading">
            { Language.get("about.titles.apis")}
          </h2>
          <div className="c-page--style-about__language-container">
            <ProgrammingBox language="GL" />
            <ProgrammingBox language="Node" />
            <ProgrammingBox language="React" />
            <ProgrammingBox language="Shopify" />
            <ProgrammingBox language="neto" />
            <ProgrammingBox language="jQuery" />
            <ProgrammingBox language="NodeCG" />
            <ProgrammingBox language="PhoneGap" />
            <ProgrammingBox language="Other" />
          </div>


          <h2 className="c-page--style-about__subheading">
            { Language.get("about.titles.other")}
          </h2>
          <p>{ Language.get("about.descriptions.other")}</p>
          <div className="c-page--style-about__language-container">
            <ProgrammingBox language="Video" />
            <ProgrammingBox language="Animation" />
            <ProgrammingBox language="Graphics" />
            <ProgrammingBox language="Networking" />
            <ProgrammingBox language="Software" />
          </div>


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

export default connect(mapStateToProps)(AboutPage);
