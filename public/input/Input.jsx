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

import Button from './button/Button';
import ButtonGroup from './button/ButtonGroup';
import Form from './form/Form';
import InputGroup from './group/InputGroup';
import Label from './label/Label';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ElementType = "input";
    let type = "text";
    let value;
    let clazzes = "o-input";
    let innerClazzes = "o-input__inner";
    let style;

    //Determining
    if(this.props.type) type = this.props.type;

    //Values
    if(this.props.value) {
      value = this.props.value;
    } else {
      value = this.props.children;
    }

    //Style
    if(this.props.style) {
      style = this.props.style;
    } else if(this.props.error || this.props.danger) {
      style = "danger";
    } else if(this.props.warning) {
      style = "warning";
    } else if(this.props.primary) {
      style = "primary";
    }

    //Classes
    clazzes += " is-"+type;

    if(style) {
      clazzes += " o-input--style-"+style;
      innerClazzes += " o-input--style-"+style+"__inner";
    }
    if(this.props.className) clazzes += " " + this.props.className;

    //Now create the element
    let element;

    //First we need to switch things like submit and reset
    if(type == "submit" || type == "reset" || type == "button") {
      return <Button {...this.props} />;
    } else if(type == "textarea") {
      element = <textarea {...this.props} className={innerClazzes}>{ value }</textarea>
    } else {
      element = <ElementType {...this.props} type={type} className={innerClazzes} />
    }

    return (
      <div className={clazzes}>
        { element }
      </div>
    )
  }
}

const TextArea = props => {
  return <Input {...props} type="textarea" />
}

export {
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  TextArea,
  Label
};
