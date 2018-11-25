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
import { NavLink } from 'react-router-dom';

import PageBoundary from '@components/page/boundary/PageBoundary';

import Styles from './Pagination.scss';


const PaginationLink = props => {
  let { to, page, children, current } = props;

  let url = to;
  if(url.indexOf('$page') !== -1) {
    url = url.replace('$page', page);
  } else {
    if(!url.endsWith("/")) url += '/';
    url += page;
  }

  let className = `o-pagination__link`;
  if(current && current == page) className += ` is-active`;

  return (
    <NavLink to={ url } className={className}>
      { children }
    </NavLink>
  );
};


export default props => {
  //Where Page = current page,
  //pages = total pages and
  //to = url, with $page
  let { page, pages, to, className } = props;
  page = parseInt(page) || 1;
  pages = parseInt(pages) || 1;

  let inners = [];

  //Internal Numbers
  let numbers = [1, pages];//Always start with page 1 and pages
  //Now add numbers page-2, page-1,page(active),page+1, page+2
  for(let i = page-2; i <= page+2; i++) {
    if(i < 1) continue;//Don't add -2, -1, 0 etc
    if(i > pages) continue;//Don't go pages+1 for example 22 pages, 23
    numbers.push(i);
  }

  //Uniqify and then sort.
  numbers = [...new Set(numbers)].sort((a,b) => a-b);



  //Prev Button
  if(page > 1) {
    inners.push(<PaginationLink key="prev" to={to} page={page-1} children="<" />);
  }

  numbers.forEach(i => {
    inners.push(<PaginationLink key={i} to={to} current={page} page={i} children={i} />);
  });

  //Next Button
  if(page < pages-1) {
    inners.push(<PaginationLink key="next" to={to} page={page+1} children=">" />);
  }

  return (
    <nav className={`o-pagination ${className}`}>
      { inners }
    </nav>
  );
};
