// Copyright (c) 2019 Dominic Masters
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

import * as React from 'react';
import { Link, LinkProps } from '@yourwishes/app-simple-react/dist/public';
import { Logo } from './../../../objects/logo/';

import './styles.scss';

//FooterLinks
export const FooterLink = (props:LinkProps) => (
  <Link {...props} className={`c-footer__navigation-link ${props.className||""}`} />
);

//Footer
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}
export interface FooterState {
  now:Date
};

export class Footer extends React.Component<FooterProps, FooterState> {
  interval:NodeJS.Timeout;

  constructor(props:FooterProps) {
    super(props);
    this.state = {
      now: new Date()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    if(this.interval) clearInterval(this.interval);
  }

  render() {
    return (
      <footer {...this.props} className={`c-footer ${this.props.className||""}`}>
        <span className="c-footer__copyright">
          &copy; 2012 ~ { this.state.now.getFullYear() } Dominic Masters
        </span>

        <Logo className="c-footer__logo" />

        <nav className="c-footer__navigation">
          <FooterLink to="/contact">Contact Me</FooterLink>
          <FooterLink to="/legal/privacy">Privacy Policy</FooterLink>
        </nav>
      </footer>
    );
  }
}
