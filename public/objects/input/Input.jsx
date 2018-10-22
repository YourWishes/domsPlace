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
import Form, { FormManager } from './form/Form';
import InputGroup from './group/InputGroup';
import Label from './label/Label';
import Keyboard from './../keyboard/Keyboard';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      focused: false
    };
  }

  isFocused() {
    return this.state && this.state.focused === true;
  }

  componentDidMount() {
    if(this.props.manager) this.props.manager.addInput(this);
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
    let ElementType = "input";
    let type = "text";
    let value;
    let clazzes = "o-input";
    let innerClazzes = "o-input__inner";
    let style;
    let props = Object.assign({}, this.props);

    //Determining
    if(props.type) type = props.type;

    //Values
    if(props.value) {
      value = props.value;
    } else {
      value = props.children;
    }

    //Style
    if(props.style) {
      style = props.style;
    } else if(props.error || props.danger) {
      style = "danger";
    } else if(props.warning) {
      style = "warning";
    } else if(props.primary) {
      style = "primary";
    }

    //Classes
    clazzes += " is-"+type;

    if(style) {
      clazzes += " o-input--style-"+style;
      innerClazzes += " o-input--style-"+style+"__inner";
    }
    if(props.className) {
      clazzes += " " + props.className;
      innerClazzes += " " + props.className + "-element";
    }

    //Clear junk props
    delete props.manager;

    //Now create the element
    let element;

    //First we need to switch things like submit and reset
    if(type == "submit" || type == "reset" || type == "button") {
      return (<Button
        {...props}
        className={props.className}
        value={this.state.value}
      />);

    } else if(type == "textarea") {
      element = (<textarea
          {...props}
          className={innerClazzes}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
        >{ this.state.value }</textarea>
      );

    } else {
      element = (<ElementType
        {...props}
        onChange={this.onChange.bind(this)}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        type={type}
        value={ this.state.value }
        className={innerClazzes}
      />);
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
  FormManager,
  InputGroup,
  TextArea,
  Label
};
