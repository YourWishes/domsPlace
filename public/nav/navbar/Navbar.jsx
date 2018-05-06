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
import Language from './../../language/Language';

const NAVBAR_LINKS = {
  "home": "/",
  "about": "/about",
  "contact": "/contact"
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let links = [];
    let keys = Object.keys(NAVBAR_LINKS);
    for(let i = 0; i < keys.length; i++) {
      let k = keys[i];
      links.push(
        <NavLink key={k} to={NAVBAR_LINKS[k]} className="o-navbar__link">
          { Language.get("navbar." + k) }
        </NavLink>
      );
    }

    return (
      <section className="o-navbar__section is-stuck">
        <nav className="o-navbar">

          <a href="/" className="o-navbar__logo-container">
            <img
              src={ require('./../../images/logo.svg') }
              className="o-navbar__logo"
              alt="domsPlace"
            />
          </a>
          { links }
        </nav>
      </section>
    );
  }
}

export default Navbar;
