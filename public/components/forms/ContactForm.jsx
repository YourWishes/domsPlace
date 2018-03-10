/*
 *  Contact Form
 *    Contact form.
 *
 *  Version:
 *    1.0.0 - 2018/03/06
 */

import React from 'react';

import { Form, InputGroup, TextInput } from './Form';
import Button from './../components/Button';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form className={this.props.className}>
        <InputGroup title="Name">
          <TextInput placeholder="Enter your name." />
        </InputGroup>

        <InputGroup title="Email">
          <TextInput type="email" placeholder="Enter your email address." />
        </InputGroup>

        <InputGroup title="Message">
          <TextInput multiline placeholder="Enter your message here." />
        </InputGroup>

        <Button to="/">Home</Button>
        <Button submit>Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
