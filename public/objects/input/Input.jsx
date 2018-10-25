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

import Styles from './Input.scss';

import Keyboard from '@public/keyboard/Keyboard';

import Button from './button/Button';
import ButtonGroup from './button/ButtonGroup';
import Form, { FormManager, FormGroup } from './form/Form';
import Label from './label/Label';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || props.children || "",
      focused: false
    };
  }

  isFocused() {
    return this.state && this.state.focused === true;
  }

  componentDidMount() {
    let { manager } = this.props;
    if(manager) manager.addInput(this);
    Keyboard.addListener(this);
  }

  componentWillUnmount() {
    if(this.props.manager) this.props.manager.removeInput(this);
    Keyboard.removeListener(this);
  }

  onKeyUp(e, k) {
    if(!this.props.manager) return;
    if(!this.isFocused()) return;
    if(!k.isSubmit()) return;
    this.props.manager.submit();
  }

  onChange(e, a, b) {
    //Try my props
    if(this.props.onChange && this.props.onChange(e) === false) return false;

    //Try the form manager
    if(this.props.manager && this.props.manager.onChange(this, e) === false) {
      return false;
    }

    //Try something else?
    this.setState({
      value: e.target.value
    });
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur() {
    this.setState({ focused: false });
  }

  render() {
    let newProps = {...this.props};
    let {
      className, type, children, style, error, danger, primary,
      warning, manager
    } = newProps;

    //Clear bad props
    [
      "error", "danger", "primary", "warning", "manager", "style", "children",
      "value"
    ].forEach(e => delete newProps[e]);

    //Prop defaults
    type = type || "text";

    //Gen classes
    let clazzes = "o-input";
    let innerClazzes = "o-input__inner";

    //Style
    if(primary) style = "primary";
    if(warning) style = "warning";
    if(error || danger) style = "danger";

    //Classes
    clazzes += ` is-${type}`;

    if(style) {
      clazzes += ` o-input--style-${style}`;
      innerClazzes += ` o-input--style-${style}__inner`;
    }

    if(className) {
      clazzes += ` ${className}`;
      innerClazzes += ` ${className}-element`;
    }

    //Now create the element
    //First we need to switch things like submit and reset
    if(["submit","reset","button"].indexOf(type) !== -1) {
      return <Button {...newProps} children={ this.state.value } />;
    }

    //Bind our event handlers for the input fields
    [ "onChange", "onFocus", "onBlur" ].forEach(e => newProps[e] = this[e].bind(this));

    let ElementType = "input";

    //Text areas are slightly different
    if(type == "textarea") ElementType = "textarea";

    return (
      <div className={clazzes}>
        <ElementType {...newProps} type={type} className={innerClazzes} value={ this.state.value } />
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
  FormManager,
  FormGroup,
  TextArea,
  Label
};
