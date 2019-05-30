// Copyright (c) 2019 Dominic Masters
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

import * as React from 'react';
import { Button, ButtonProps } from './../button/';
import { Assign } from 'utility-types';
import './styles.scss';

//Input Types, e.g. email, text, etc.
export enum InputType {
  //HTML5:
  COLOR = "color",
  DATE = "date",
  DATETIME_LOCAL = "datetime-local",
  EMAIL = "email",
  MONTH = "month",
  NUMBER = "number",
  RANGE = "range",
  SEARCH = "search",
  TEL = "tel",
  TIME = "time",
  URL = "url",
  WEEK = "week",

  //HTML4~
  TEXT = "text",
  HIDDEN = "hidden",
  PASSWORD = "password",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",

  //Button types
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset"
};

//Input values, e.g. the values the inputs can have
export type InputValue = (
  string | number | boolean |
  (string|number|boolean)[]
);

//Props
type InputPropsPicked = {
  className?:string,

  to?:undefined,
  type?:InputType,

  //Value Management
  value?:InputValue,
  children?:string,//Acts more like defaultValue than value, for textareas
  defaultValue?:InputValue,
  readOnly?:boolean,

  maxLength?:string|number,

  //Readability
  placeholder?:string,
  title?:string,
  name?:string,
  error?:string,

  //Specifics.
  rows?:string|number,

  //Events
  onChange?:React.FormEventHandler<any>
}

//We are going to override some of the buttons stuff.
export type InputProps = Assign<Assign<InputPropsPicked, ButtonProps>, {
  ref?:any
}>;

export class InputElement extends React.Component<InputProps> {
  constructor(props:InputProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    //Fetch from props
    let { className, type, children, value, defaultValue } = this.props;

    //Determine default value
    if(children && typeof children === "string") {
      defaultValue = `${children}` as string;
    }

    let np = {};

    //Begin building class
    let clazz = `o-input is-${type} `;

    //Determine input type
    type = type || InputType.TEXT;
    let ElementType:any = "input";

    /*** Begin Type Specific Processing... */

    //Textarea? Adjust the values a bit
    if(type == InputType.TEXTAREA) {
      ElementType = "textarea";
      type = undefined;
      children = undefined;
    }

    //Button?
    if([InputType.BUTTON,InputType.SUBMIT,InputType.RESET].some(e => type === e)) {
      ElementType = Button;
      children = (value || defaultValue) as any;
      value = undefined;
      clazz = ' ';
      [
        'to','primary','secondary','size','style','large','loading'
      ].forEach(e => np[e] = this.props[e]);
    }

    //Add Custom classes`
    clazz += className||"";

    //Now Build new props
    np['className'] = clazz;
    np['type'] = type;
    np['children'] = children;
    np['value'] = value;
    np['defaultValue'] = defaultValue;

    [
    'readOnly','placeholder','title','rows','maxLength',
    'onChange', 'disabled'
    ].forEach(e => np[e] = this.props[e]);

    return <ElementType {...np} />
  }
}

export const Input = InputElement;

export const TextArea = (props:InputProps) => (
  <InputElement {...props} type={props.type || InputType.TEXTAREA} />
);
