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
import BodySection from './../sections/BodySection';
import TitleSection from './../sections/TitleSection';

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
        <TitleSection title="contact.form.title" />
        <BodySection>
          <div className="c-page--style-container__split">
            <ContactForm className="c-page--style-container__split-part" />
            
            <div className="c-page--style-container__split-part">
              <p>
                {Language.get("contact.form.info")}
              </p>
            </div>
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
