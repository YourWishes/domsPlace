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
import Page, { PageBoundary } from './../Page';
import Input, { Form, InputGroup, TextArea, Label, ButtonGroup } from './../../input/Input';
import Language from './../../language/Language';
import ElementScrollFader from './../../animation/fade/ElementScrollFader';
import ContentBox from './../../content/ContentBox';
import { Title, Paragraph } from './../../typography/Typography';
import Forms from './../../../common/Forms';
import Section, {
  BodySection,
  ClearSection,
  SplitSection,
  Split
} from './../../section/Section';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page style="contact-page" className="p-contact-page" title={ Language.get("pages.contact.title") }>

        <ClearSection />

        <PageBoundary small>

          <ElementScrollFader from="left">
            <ContentBox box className="u-text-center">
              <Title>Contact Me</Title>
              <Paragraph>
                Want to get in touch with me? Fill out this easy form and I should be
                in touch shortly to chat! More of a phone person? Leave a number
                and we can chat.
              </Paragraph>
            </ContentBox>
          </ElementScrollFader>

          <br />
          <br />

          <ElementScrollFader from="right">
            <BodySection>
              <Form>
                <InputGroup>
                  <Label>{ Language.get("pages.contact.name.label") }</Label>
                  <Input
                    type="text"
                    placeholder={ Language.get("pages.contact.name.placeholder") }
                    required={ Forms.contact.name.required }
                    maxLength={ Forms.contact.name.maxLength }

                  />
                </InputGroup>

                <InputGroup >
                  <Label>{ Language.get("pages.contact.email.label") }</Label>
                  <Input
                    type="email"
                    placeholder={ Language.get("pages.contact.email.placeholder") }
                    required={ Forms.contact.email.required }
                    maxLength={ Forms.contact.email.maxLength }
                  />
                </InputGroup>

                <InputGroup>
                  <Label>{ Language.get("pages.contact.message.label") }</Label>
                  <TextArea
                    placeholder={ Language.get("pages.contact.message.placeholder") }
                    rows="8"
                    className="p-contact-page__message"
                    required={ Forms.contact.message.required }
                    maxLength={ Forms.contact.message.maxLength }
                  />
                </InputGroup>

                <ButtonGroup>
                  <Input type="submit" value={ Language.get("pages.contact.send") } primary="true" />
                  <Input type="reset" value={ Language.get("pages.contact.reset") } />
                </ButtonGroup>
              </Form>
            </BodySection>
          </ElementScrollFader>
        </PageBoundary>

        <ClearSection />
      </Page>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(ContactPage);
