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

import Forms from '@common/Forms';

//Actions
import { openModal } from '@public/actions/ModalActions';

//Components
import Page, { PageBoundary } from '@components/page/Page';
import { withLanguage } from '@public/language/Language';
import Section, {
  BodySection,
  ClearSection,
  SplitSection,
  Split
} from '@components/section/Section';

//Objects
import ElementScrollFader from '@objects/animation/fade/ElementScrollFader';
import ContentBox from '@objects/content/box/ContentBox';
import { Title, Heading1, Paragraph } from '@objects/typography/Typography';
import Input, {
  Form,
  FormManager,
  FormGroup,
  TextArea,
  Label,
  ButtonGroup
} from '@objects/input/Input';
import Modal from '@objects/modal/Modal';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    //Form Manager (For the form and elements)
    this.manager = new FormManager();

    this.state = {
      sent: false
    };
  }

  onSuccess(data) {
    if(data !== true) return this.onError(data);
    this.setState({
      sent: true
    });
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

    //Form
    let inners;
    if(this.state.sent) {
      //Sent Display
      inners = (
        <ElementScrollFader from="bottom">
          <ContentBox box className="u-text-center">
            <Heading1>{ lang.pages.contact.success.heading }</Heading1>
            <Paragraph>{ lang.pages.contact.success.paragraph }</Paragraph>
          </ContentBox>
        </ElementScrollFader>
      );
    } else {
      //Form
      inners = (
        <ElementScrollFader from="right">
          <BodySection>
            <Form
              post="/api/contact/send"
              contentType="application/json"
              ajax
              loader
              onSuccess={ (e) => this.onSuccess(e) }
              onError={ (e) => this.onError(e) }
              manager={ this.manager }
            >
              <FormGroup>
                <Label htmlFor="name">
                  { lang.pages.contact.name.label }
                </Label>
                <Input
                  name="name"
                  type="text"
                  placeholder={ lang.pages.contact.name.placeholder }
                  required={ Forms.contact.name.required }
                  maxLength={ Forms.contact.name.maxLength }
                  manager={ this.manager }
                />
              </FormGroup>

              <FormGroup >
                <Label htmlFor="email">
                  { lang.pages.contact.email.label }
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder={ lang.pages.contact.email.placeholder }
                  required={ Forms.contact.email.required }
                  maxLength={ Forms.contact.email.maxLength }
                  manager={ this.manager }
                />
              </FormGroup>

              <FormGroup>
                <Label> htmlFor="message">
                  { lang.pages.contact.message.label }
                </Label>
                <TextArea
                  name="message"
                  placeholder={ lang.pages.contact.message.placeholder }
                  rows="8"
                  className="p-contact-page__message"
                  required={ Forms.contact.message.required }
                  maxLength={ Forms.contact.message.maxLength }
                  manager={ this.manager }
                />
              </FormGroup>

              <ButtonGroup>
                <Input type="submit" value={ lang.pages.contact.send } primary="true" />
                <Input type="reset" value={ lang.pages.contact.reset } />
              </ButtonGroup>
            </Form>
          </BodySection>
        </ElementScrollFader>
      );
    }

    return (
      <Page style="contact-page" className="p-contact-page" title={ lang.pages.contact.title }>
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

          <br />
          <br />

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
