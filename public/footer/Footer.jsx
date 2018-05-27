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
import { PageBoundary } from './../page/Page';

const FooterLink = function(props) {
  return (
    <span className="c-footer__link">
      <a href="#">
        Link
      </a>
    </span>
  );
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="c-footer">
        <PageBoundary>
          <div className="c-footer__inner">

            <nav className="c-footer__links">
              <FooterLink title="privacy" />
              <FooterLink title="privacy" />
              <FooterLink title="privacy" />
              <FooterLink title="privacy" />
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

export default Footer;
