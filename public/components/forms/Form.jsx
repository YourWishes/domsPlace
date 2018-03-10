/*
 *  Form
 *    Form.
 *
 *  Version:
 *    1.0.0 - 2018/03/06
 */

import React from 'react';

//Form
class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clazz = "c-form";
    if(this.props.className) clazz += " " + this.props.className;
    return (
      <form className={clazz}>
        {this.props.children}
      </form>
    )
  }
}

//InputGroup
class InputGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-form__group">
        <label className="c-form__label">{this.props.title}</label>
        { this.props.children }
      </div>
    );
  }
}

//Input
class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let element;
    let elementType = "input";
    let children;

    let props = Object.assign({

    }, this.props);

    let clazz = "c-form-input ";;

    if(this.props.multiline) {
      elementType = "textarea";
      children = this.props.value;
      clazz += "c-form-input--multiline ";

      delete props.type;
      delete props.multiline;
    } else {
      props.value = this.props.value;
    }

    if(this.props.className) clazz += this.props.className;
    props.className = clazz;

    element = React.createElement(
      elementType,
      props,
      children
    );
    return element;
  }
}

export { Form, InputGroup, TextInput };
