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
import { withLanguage } from '@public/language/Language';
import * as MenuActions from '@public/actions/MenuActions';

import Styles from './HamburgerMenu.scss';

const HamburerMenuItem = props => {
  let { lang, link, className } = props;

  return (
    <li
      {...props}
      className={`c-hamburger-menu__link c-hamburger-menu__link--${link} ${className||""}`}
    >
      <NavLink to={ props.to } className="c-hamburger-menu__link-link">{ lang }
      </NavLink>
    </li>
  );
}

const HamburgerMenu = props => {
  let { open, className, toggleMenu, lang } = props;

  let clazz = "c-hamburger-menu";
  if(open) clazz += " is-open";
  if(className) clazz += ` ${className}`;

  return (
    <div className={clazz}>
      <button type="button" className="c-hamburger-menu__button" onClick={toggleMenu}>
        <img src={ require('@assets/images/icons/hamburger.svg') } className="c-hamburger-menu__icon" />
      </button>

      <nav className="c-hamburger-menu__menu">
        <ul className="c-hamburger-menu__links">
          <HamburerMenuItem to="/" lang={lang.navbar.home} link="home" />
          <HamburerMenuItem to="/contact" lang={lang.navbar.contact} link="contact" />
        </ul>
      </nav>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    open: state.menu.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: function(theme) {
      dispatch(MenuActions.toggleMenu());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withLanguage(HamburgerMenu));
