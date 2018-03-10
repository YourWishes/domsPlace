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

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <PhoneSection />
        <BodySection>
          <h1>Contact</h1>
          <div className="c-page--style-container__split">
            <p className="c-page--style-container__split-part">
              Want to get ahold of me and other lorem ipsum dolor?
            </p>
            <ContactForm className="c-page--style-container__split-part" />
          </div>
        </BodySection>
      </Page>
    )
  }
}

export default ContactPage;
