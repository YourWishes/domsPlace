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
import { connect } from 'react-redux';
import Language from './../../language/Language';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form className={this.props.className}>
        <InputGroup title={Language.get("contact.form.name.label")} >
          <TextInput placeholder={Language.get("contact.form.name.placeholder")} />
        </InputGroup>

        <InputGroup title={Language.get("contact.form.email.label")}>
          <TextInput type="email" placeholder={Language.get("contact.form.email.placeholder")} />
        </InputGroup>

        <InputGroup title={Language.get("contact.form.message.label")}>
          <TextInput multiline placeholder={Language.get("contact.form.message.placeholder")} />
        </InputGroup>

        <Button submit>{Language.get("contact.form.submit")}</Button>
      </Form>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(ContactForm);
