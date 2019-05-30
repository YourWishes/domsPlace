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
import { Link, Image } from '@yourwishes/app-simple-react/dist/public';
import { Logo } from './../../../objects/logo/';

import './styles.scss';

//Social Icon
export interface HeaderSocialIconProps {
  to:string,
  className?:string,
  icon:string,
  title:string
};
export const HeaderSocialIcon = (props:HeaderSocialIconProps) => (
  <Link to={props.to} className={`c-header__social-icon ${props.className||""} is-${props.icon}`}>
    <Image src={ require('./../../../assets/icons/icon-'+props.icon+'.svg') } className="c-header__social-icon-image" />
    <span className="c-header__social-icon-label">
      { props.title }
    </span>
  </Link>
);

//Header
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> { }
export interface HeaderState { now:Date }

export class Header extends React.Component<HeaderProps, HeaderState> {
  interval:NodeJS.Timeout;

  constructor(props:HeaderProps) {
    super(props);
    this.state = { now: new Date() }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    if(this.interval) clearInterval(this.interval);
  }

  render() {
    let { className } = this.props;
    let { now } = this.state;
    return (
      <header {...this.props} className={`c-header ${className||""}`}>
        <time dateTime={now.toString()} className="c-header__time">
          { now.getHours() }<span className="c-header__time-colon">:</span>{ `${now.getMinutes()}`.padStart(2, '0') }
        </time>

        <Logo className="c-header__logo" />

        <div className="c-header__social">
          <HeaderSocialIcon to="//github.com/YourWishes" icon="github" title="GitHub" />
        </div>
      </header>
    );
  }
};
