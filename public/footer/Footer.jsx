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
import Language from './../language/Language';
import { NavLink } from 'react-router-dom'
import { PageBoundary } from './../page/Page';

const FooterLink = function(props) {
  let key = "footer.links." + props.title;
  return (
    <NavLink to={ props.to } className="c-footer__link">
      { Language.get(key) }
    </NavLink>
  );
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__part">
        </div>

        <PageBoundary>
          <div className="c-footer__inner">

            <nav className="c-footer__links">
              <FooterLink title="home" to="/" />
              <FooterLink title="contact" to="/contact" />
              <FooterLink title="privacy" to="/legal/privacy" />
            </nav>

            <div className="c-footer__copyright">
              &copy; { new Date(1335830400000).getFullYear() }
              ~
              { new Date().getFullYear() } Dominic Masters
            </div>
          </div>
        </PageBoundary>
      </footer>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(Footer);
