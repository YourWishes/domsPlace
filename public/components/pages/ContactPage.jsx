/*
 *  Contact Page
 *    Not the Homepage.
 *
 *  Dependencies:
 *    styles/components/_page--style-contact.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/03
 */

import React from 'react';

import Page from './../Page';
import PhoneSection from './../sections/PhoneSection';
import BodySection from './../sections/BodySection';

import ContactForm from './../forms/ContactForm';

import { connect } from 'react-redux';
import Language from './../../language/Language';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <PhoneSection />
        <BodySection>
          <h1>{Language.get("contact.form.title")}</h1>
          <p>
            {Language.get("contact.form.info")}
          </p>
          <div className="c-page--style-container__split">
            <ContactForm className="c-page--style-container__split-part" />
            <div className="c-page--style-container__split-part"></div>
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

export default connect(mapStateToProps)(ContactPage);
