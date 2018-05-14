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

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ElementType = "button";//Upper Camel-Case because of react requriements
    let clazzes = "o-btn";
    let type = "button";
    let contents;
    let href;
    let to;
    let activeClassName;
    let style;

    //Basic Element Determining
    if(this.props.type) {
      //Buttons and Input Buttons
      type = this.props.type;
      clazzes += " is-button";
    } else if(this.props.href) {
      //Anchor Tags1
      ElementType = "a";
      href = this.props.href;
      clazzes += " is-link is-anchor";
    } else if(this.props.to) {
      //React NavLink/Link
      to = this.props.to;
      ElementType = NavLink;
      clazzes += " is-link is-nav-link";
      activeClassName = "is-active";
    } else {
      //Everything Else (button without a type);
      clazzes += " is-not-button";
    }

    if(this.props.value) {
      contents = this.props.value;
    } else {
      contents = this.props.children;
    }

    //Determine Style
    if(this.props.primary) {
      style = "primary"
    } else if(this.props.secondary) {
      style = "secondary";
    } else if(this.props.danger) {
      style = "danger";
    } else if(this.props.warning) {
      style = "warning";
    } else if(this.props.style) {
      style = this.props.style;
    }

    //Style Clazzes
    if(style) {
      clazzes += " o-btn--style-"+style;
    }

    //Determine extra clazzes
    if(this.props.className) this.clazzes += " "+this.props.className;

    return (
      <ElementType
        {...this.props}
        type={type}
        className={clazzes}
        href={href}
        to={to}
      >
        <span className={ "o-btn__inner" + (style ? " o-btn--style-" + style + "__inner" : "") }>
          {contents}
        </span>
      </ElementType>
    );
  }
}
