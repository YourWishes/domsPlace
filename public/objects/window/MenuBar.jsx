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
import ContextMenu from './ContextMenu';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="o-window__menu-bar">
      { props.children }
    </div>
  );
}

class MenuOption extends React.Component {
  constructor(props) {
    super(props);

    //Bound Methods
    this.onClickBound = this.onClick.bind(this);
    this.onMouseLeaveBound = this.onMouseLeave.bind(this);

    this.state = {
      open: false,
      disabled: props.disabled || false
    }
  }


  hasMenu() {
    return this.props.menu;
  }

  isMenuOpen() { return this.state.open; }
  isDisabled() { return this.state.disabled; }

  //Event Handlers
  onClick() {
    if(this.isDisabled()) return;
    if(this.hasMenu()) {
      this.setState({
        open: !this.state.open
      });
    }
  }

  onMouseLeave() {
    if(!this.hasMenu()) return;
    if(!this.isMenuOpen()) return;

    this.setState({
      open: false
    });
  }

  componentDidMount() {
    //Add event listeners
    this.refs.button.addEventListener('click', this.onClickBound);
    this.refs.option.addEventListener('mouseleave', this.onMouseLeaveBound);
  }

  componentWillUnmount() {
    //Remove event listeners
    this.refs.button.removeEventListener('click', this.onClickBound);
    this.refs.option.removeEventListener('mouseleave', this.onMouseLeaveBound);
  }

  //Render method
  render() {
    let menu;
    let button;

    if(this.props.menu) {
      menu = (
        <ContextMenu>
          { this.props.menu }
        </ContextMenu>
      );
      clazz += " has-menu";
    }

    if(this.props.href) {
      button = (
        <a href={this.props.href} className="o-window__menu-bar-button" ref="button" target={this.props.target}>
          { this.props.title }
        </a>
      );
    } else if(this.props.to) {
      button = (
        <Link to={this.props.to} className="o-window__menu-bar-button" ref="button" target={this.props.target}>
          { this.props.title }
        </Link>
      );
    } else {
      button = (
        <div className="o-window__menu-bar-button" ref="button">
          {this.props.title}
        </div>
      );
    }

    let clazz = "o-window__menu-bar-option"
    if(this.props.disabled) {
      clazz += " is-disabled";
    }

    if(this.state.open) {
      clazz += " is-active";
    }

    return (
      <div className={clazz} ref="option">
        { button }
        { menu }
      </div>
    );
  }
};

export {
  MenuOption
};
