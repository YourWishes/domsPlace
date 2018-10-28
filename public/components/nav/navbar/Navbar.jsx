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
import { NavLink } from 'react-router-dom'

import { withLanguage } from '@public/language/Language';

import Styles from './Navbar.scss';

import { PageBoundary } from '@components/page/Page';
import HamburgerMenu from './../menu/HamburgerMenu';

import Image from '@objects/image/Image';

const NavbarLink = props => {
  let { to, exact, title } = props;

  return (
    <NavLink to={ to } className="c-navbar__link" activeClassName="is-active" exact={ exact }>
      { title }
    </NavLink>
  );
};


const Navbar = props => {
  let { lang } = props;

  return (
    <section className="c-navbar is-stuck">
      <PageBoundary>
        <nav className="c-navbar__nav">

          {/* Logo */}
          <NavLink to="/" className="c-navbar__logo-container" activeClassName="is-active">
            <Image
              src={ require('@assets/images/logo.svg') }
              className="c-navbar__logo"
              alt={ lang.site.name  }
              title={ lang.site.name }
              width="780"
              height="200"
            />
          </NavLink>

          {/* Desktop / Tablet Screen Links */}
          <NavbarLink to="/" title={lang.navbar.home} exact />
          <NavbarLink to="/contact" title={lang.navbar.contact} exact />

          {/* Hamburger Menu for smaller screens */}
          <HamburgerMenu className="c-navbar__hamburger" />
        </nav>
      </PageBoundary>
    </section>
  );
}

export default withLanguage(Navbar);
