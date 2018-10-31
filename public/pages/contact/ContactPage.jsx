// Copyright (c) 2018 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import { openModal } from '@public/actions/ModalActions';

//Components
import Page, { PageBoundary } from '@components/page/Page';
import { withLanguage } from '@public/language/Language';
import { ClearSection } from '@components/section/Section';

//Objects
import ElementScrollFader from '@objects/animation/fade/ElementScrollFader';
import ContentBox from '@objects/content/box/ContentBox';
import { Title, Heading1, Paragraph } from '@objects/typography/Typography';
import Modal from '@objects/modal/Modal';
import { FormManager } from '@objects/input/Input';

import ContactForm from './form/ContactForm';

import Styles from './ContactPage.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    //Form Manager (For the form and elements)
    this.manager = new FormManager();

    this.state = { sent: false };
  }

  onSuccess(data) {
    if(data !== true) return this.onError(data);
    this.setState({ sent: true });
  }

  onError(e, a, b) {
    this.props.openModal(
      <Modal close title={ this.props.lang.pages.contact.error }>
        { e }
      </Modal>
    );
  }

  render() {
    let { lang } = this.props;
    let { sent } = this.state;

    //Form
    let inners;
    if(sent) {
      //Sent Display
      inners = (
        <ElementScrollFader from="bottom">
          <ContentBox box className="u-text-center">
            <Heading1 children={ lang.pages.contact.success.heading } />
            <Paragraph children={ lang.pages.contact.success.paragraph } />
          </ContentBox>
        </ElementScrollFader>
      );
    } else {
      //Form
      inners = (
        <ElementScrollFader from="right">
          <ContentBox box>
            <ContactForm
              onSuccess={ (e) => this.onSuccess(e) }
              onError={ (e) => this.onError(e) }
              manager={ this.manager }
            />
          </ContentBox>
        </ElementScrollFader>
      );
    }

    return (
      <Page
        style="contact-page"
        className="p-contact-page"
        title={ lang.pages.contact.title }
        background={ require('@assets/images/patterns/lemon-triangle.svg') }
      >
        <ClearSection />
        <PageBoundary small>

          <ElementScrollFader from="left">
            <ContentBox box className="u-text-center">
              <Title>{ lang.pages.contact.heading }</Title>
              <Paragraph>
                { lang.pages.contact.paragraph }
              </Paragraph>
            </ContentBox>
          </ElementScrollFader>
          { inners }

        </PageBoundary>
        <ClearSection />
      </Page>
    );
  }
}

const mapStateToProps = state => {return {}};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    openModal: openModal
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withLanguage(ContactPage));
