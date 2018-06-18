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
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as MenuActions from './../../actions/MenuActions';

const HamburerMenuItem = function(props) {
  return (
    <li className="o-hamburger-menu__link">
      <NavLink to={ props.to } className="o-hamburger-menu__link-link">
        Home
      </NavLink>
    </li>
  );
}

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clazz = "o-hamburger-menu";
    if(this.props.open) clazz += " is-open";
    if(this.props.className) clazz += " " + this.props.className;

    return (
      <div className={clazz}>
        <button
          type="button"
          className="o-hamburger-menu__button"
          onClick={this.props.toggleMenu}
        >
          <img
            src={ require('./../../images/icons/hamburger.svg') }
            className="o-hamburger-menu__icon"
          />
        </button>

        <div className="o-hamburger-menu__menu">
          <ul className="o-hamburger-menu__links">
            <HamburerMenuItem to="/" />
            <HamburerMenuItem to="/" />
            <HamburerMenuItem to="/" />
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = function(state) {
  return {
    open: state.menu.open
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    toggleMenu: function(theme) {
      dispatch(MenuActions.toggleMenu());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);
