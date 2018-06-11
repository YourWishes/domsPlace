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

const HamburerMenuItem = function(props) {
  return (
    <li className="o-hamburger-menu__link">
      <NavLink to={ props.to }>Home</NavLink>
    </li>
  );
}

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      open: false
    }

    this.toggleMenuBound = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let clazz = "o-hamburger-menu";
    if(this.state && this.state.open) clazz += " is-open";
    if(this.props.className) clazz += " " + this.props.className;

    return (
      <div className={clazz}>
        <button
          type="button"
          className="o-hamburger-menu__button"
          onClick={this.toggleMenuBound}
        >
          <img
            src={ require('./../../images/icons/hamburger.svg') }
            className="o-hamburger-menu__icon"
          />
        </button>

        <ul className="o-hamburger-menu__menu">
          <HamburerMenuItem to="/" />
          <HamburerMenuItem to="/" />
          <HamburerMenuItem to="/" />
        </ul>
      </div>
    );
  }
}

export default HamburgerMenu;
