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
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import PageBoundary from '@components/page/PageBoundary';
import Language from '@public/language/Language';
import HamburgerMenu from './../menu/HamburgerMenu';
import Image from '@objects/image/Image';

const NavbarLink = function(props) {
  return (
    <NavLink to={ props.to } className="c-navbar__link" activeClassName="is-active" exact={props.exact}>
      { Language.get("navbar." + props.title) }
    </NavLink>
  );
}


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="c-navbar is-stuck">
        <PageBoundary>
          <nav className="c-navbar__nav">

            {/* Logo */}
            <NavLink to="/" className="c-navbar__logo-container" activeClassName="is-active">
              <Image
                src={ require('./../../../assets/images/logo.svg') }
                className="c-navbar__logo"
                alt={ Language.get("site.name") }
                title={ Language.get("site.name") }
                width="780"
                height="200"
              />
            </NavLink>

            {/* Desktop / Tablet Screen Links */}
            <NavbarLink to="/" title="home" exact />
            <NavbarLink to="/contact" title="contact" exact />

            {/* Hamburger Menu for smaller screens */}
            <HamburgerMenu className="c-navbar__hamburger" />
          </nav>
        </PageBoundary>
      </section>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));
