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

import Forms from '@common/Forms';

import { withLanguage } from '@public/language/Language';

import Input, {
  Form, FormManager, FormGroup,
  TextArea, Label, ButtonGroup
} from '@objects/input/Input';

import Styles from './ContactForm.scss';

export default withLanguage(props => {
  let newProps = {...props};
  let { className, lang, manager } = props;

  ["setLanguage"].forEach(e => delete newProps[e]);

  return (
    <Form
      {...newProps}
      className={ `c-contact-form ${className||""}` }
      post="/api/contact/send" contentType="application/json" ajax loader
    >
      <FormGroup>
        <Label htmlFor="name" children={ lang.pages.contact.name.label } />
        <Input
          name="name" type="text"
          placeholder={ lang.pages.contact.name.placeholder }
          required={ Forms.contact.name.required }
          maxLength={ Forms.contact.name.maxLength }
          manager={ manager }
        />
      </FormGroup>

      <FormGroup >
        <Label htmlFor="email" children={ lang.pages.contact.email.label } />
        <Input
          name="email" type="email"
          placeholder={ lang.pages.contact.email.placeholder }
          required={ Forms.contact.email.required }
          maxLength={ Forms.contact.email.maxLength }
          manager={ manager }
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message" children={ lang.pages.contact.message.label } />
        <TextArea
          className="p-contact-page__message"
          name="message" rows="8"
          placeholder={ lang.pages.contact.message.placeholder }
          required={ Forms.contact.message.required }
          maxLength={ Forms.contact.message.maxLength }
          manager={ manager }
        />
      </FormGroup>

      <ButtonGroup>
        <Input type="submit" value={ lang.pages.contact.send } primary="true" />
        <Input type="reset" value={ lang.pages.contact.reset } />
      </ButtonGroup>
    </Form>
  );
});
