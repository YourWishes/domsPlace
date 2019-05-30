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
import { Link } from '@yourwishes/app-simple-react/dist/public';

import './styles.scss';


export interface BreacrumbCrumbProps {
  title:string, to:string
}

export interface BreadcrumbProps {
  className?:string
  crumbs:BreacrumbCrumbProps[]
}


export const BreadcrumbCrumb = (props:BreacrumbCrumbProps) => (
  <li className="o-breadcrumb__list-item">
    <Link to={ props.to } className="o-breadcrumb__list-item-link" activeClassName="is-active" exact>
      { props.title }
    </Link>
  </li>
);

export const Breadcrumb = (props:BreadcrumbProps) => {
  let crumbs = [
    {to:'/',title:'Home'}, ...props.crumbs
  ].map((crumb,i) => <BreadcrumbCrumb {...crumb} key={'crumb'+i} />);

  return (
    <nav className={`o-breadcrumb ${props.className||""}`}>
      <ul className="o-breadcrumb__list">{ crumbs }</ul>
    </nav>
  );
}
