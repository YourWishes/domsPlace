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
import { Image, Link, LinkProps } from '@yourwishes/app-simple-react/dist/public/';

import './styles.scss';


export interface MenuLinkProps extends LinkProps {
  to:string,
  title:string,
  exact?:boolean
};

export const MenuLink = (props:MenuLinkProps) => {
  return (
    <Link className="c-hamburger__link" {...props} activeClassName="is-active">
      { props.title }
    </Link>
  );
};


export interface HamburgerMenuProps { className?:string, links:MenuLinkProps[] }
export interface HamburgerMenuState { open:boolean }

export class HamburgerMenu extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
  menu:HTMLDivElement;
  clickEvent;

  constructor(props:HamburgerMenuProps) {
    super(props);

    this.clickEvent = this.onClickMenu.bind(this);
    this.state = { open: false };
  }

  componentDidMount() {
    this.menu.addEventListener('click', this.clickEvent);
  }

  componentWillUnmount() {
    this.menu.removeEventListener('click', this.clickEvent);
  }

  onClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ open: !this.state.open });
  }

  onClickMenu(e:MouseEvent) {
    if(e.target !== this.menu) return;
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  onItemClick(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    console.log('oof');
    this.setState({ open: false });
  }

  render () {
    let { className, links } = this.props;
    let { open } = this.state;

    return (
      <nav className={`c-hamburger ${className||""} ${open?'is-open':'is-closed'}`}>
        <button className="c-hamburger__btn" type="button" onClick={e => this.onClick(e)}>
          <div className="c-hamburger__btn-inner">
            <Image
              src={require('./../../../../assets/icons/icon-hamburger.svg')}
              className="c-hamburger__btn-icon is-open"
            />

            <Image
              src={require('./../../../../assets/icons/icon-close.svg')}
              className="c-hamburger__btn-icon is-close"
            />
          </div>
        </button>

        <div className="c-hamburger__menu" ref={e => this.menu = e }>
          <div className="c-hamburger__menu-body">
            { links.map((link,i) =>
              <MenuLink {...link} key={i} onClick={e => this.onItemClick(e)} />
            )}
          </div>
        </div>
      </nav>
    );
  }
};
