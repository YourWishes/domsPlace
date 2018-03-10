/*
 *  Button
 *    Button
 *
 *  Dependencies:
 *    styles/objects/_button.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/07
 */
import React from 'react';

import { Link, NavLink } from 'react-router-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let element;
    let elementType = "button";
    let children = this.props.children;
    let type = "button";
    let clazz = "o-button";

    let props = Object.assign({}, this.props);

    //Determine Button type
    if(props.submit) {
      type = "submit";
      delete props.submit;
    }
    if(props.reset) {
      type = "reset";
      delete props.reset;
    }
    props.type = type;//Set onto type

    //Link?
    if(typeof props.to !== typeof undefined) {
      elementType = NavLink;
      delete props.type;
    }

    if(typeof props.href !== typeof undefined) {
      elementType = "a";
      delete props.type;
    }

    //Clazzes
    if(this.props.style) clazz += " o-button--style-" + this.props.style;
    if(this.props.className) clazz += " " + this.props.className;
    props.className = clazz;

    //Create element
    element = React.createElement(
      elementType,
      props,
      children
    );
    return element;
  }
}

export default Button;
