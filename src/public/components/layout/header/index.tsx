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
import { Logo } from './../../../objects/logo/';
import { HamburgerMenu } from './hamburger/';
import { HeaderNav } from './nav/';

import './styles.scss';

export const Links = [
  { title: 'Home', exact: true, to: '/' },
  { title: 'About', exact: true, to: '/about' },
  { title: 'Blog', exact: true, to: '/blog' },
  { title: 'Contact', to: '/contact' }
];


export interface HeaderProps extends React.HTMLAttributes<HTMLElement> { }
export interface HeaderState {
  now:Date
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  time:NodeJS.Timeout;

  constructor(props:HeaderProps) {
    super(props);

    this.state = {
      now: new Date()
    };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ now: new Date() });
    }, 500);
  }

  componentWillUnmount() {
    if(this.time) clearInterval(this.time);
  }

  render() {
    let { className } = this.props;
    let { now } = this.state;

    let pz = (n:number) => (`${n}`).padStart(2,'0');

    return (
      <header {...this.props} className={`c-header ${className||""}`}>
        <HamburgerMenu className="c-header__hamburger" links={Links}  />
        <Logo className="c-header__logo" />
        <HeaderNav className="c-header__nav" links={Links}  />

        <span className="c-header__time">
          {pz(now.getHours())}<span className="c-header__time-colon">:</span>{pz(now.getMinutes())}
        </span>
      </header>
    );
  }
}
