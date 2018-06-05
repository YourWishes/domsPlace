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
import Input, { Form, InputGroup, TextArea, Label, ButtonGroup } from './../../input/input';
import Language from './../../language/Language';
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
      <Page style="contact-page" className="p-contact-page">

        <ClearSection />

        <PageBoundary small>
          <SplitSection>
            <Split>
              <BodySection>
                <Form>
                  <InputGroup>
                    <Label>{ Language.get("pages.contact.name.label") }</Label>
                    <Input
                      type="text"
                      placeholder={ Language.get("pages.contact.name.placeholder") }
                    />
                  </InputGroup>

                  <InputGroup >
                    <Label>{ Language.get("pages.contact.email.label") }</Label>
                    <Input
                      type="email"
                      placeholder={ Language.get("pages.contact.email.placeholder") }
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>{ Language.get("pages.contact.message.label") }</Label>
                    <TextArea
                      placeholder={ Language.get("pages.contact.message.placeholder") }
                      rows="8"
                      className="p-contact-page__message"
                    />
                  </InputGroup>

                  <ButtonGroup>
                    <Input type="submit" value={ Language.get("pages.contact.send") } primary="true" />
                    <Input type="reset" value={ Language.get("pages.contact.reset") } />
                  </ButtonGroup>
                </Form>
              </BodySection>
            </Split>

          </SplitSection>
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
