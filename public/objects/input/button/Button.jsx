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
import { NavLink } from 'react-router-dom';

import Styles from './Button.scss';

export default props => {
  let newProps = {...props};
  let {
    className, href, to, style, type, value, children,
    error, danger, primary, warning, manager
  } = newProps;

  [
    "style", "value", "href", "to", "children", "error", "danger", "primary",
    "warning", "manager"
  ].forEach(e => delete newProps[e]);

  type = type || "button";
  children = children || value;

  if(primary) style = "primary";
  if(warning) style = "warning";
  if(error || danger) style = "danger";


  let ElementType = "button";//Upper Camel-Case because of react requriements
  let clazzes = "o-btn";

  //Basic Element Determining
  if(type) {
    //Buttons and Input Buttons
    clazzes += " is-button";

  } else if(href) {
    //Anchor Tags!
    ElementType = "a";
    clazzes += " is-link is-anchor";
    newProps.href = to || href;

  } else if(to) {
    ElementType = NavLink;
    clazzes += " is-link is-nav-link";
    newProps.to = to || href;

  } else {
    //Everything Else (button without a type);
    clazzes += " is-not-button";

  }

  if(style) clazzes += ` o-btn--style-${style}`;
  if(className) clazzes += ` ${className}`;

  return (
    <ElementType {...newProps} className={clazzes}>
      <span className={"o-btn__inner"+(style?` o-btn--style-${style}__inner`:"")}>
        {contents}
      </span>
    </ElementType>
  );
}
