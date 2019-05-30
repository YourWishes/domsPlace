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
import './styles.scss';

export enum Size { SMALL = 'small', MEDIUM = 'medium', LARGE = 'large' };

export type PageWrapperProps = (
  {
    size?:Size|string,

    medium?:boolean,
    small?:boolean,
    large?:boolean
  } &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
);

export const PageBoundary = (props:PageWrapperProps) => {
  let {
    size, className, small, medium, large
  } = props;

  let np = {...props};
  ['small','medium','large'].forEach(e => delete np[e]);

  size = size || Size.LARGE;

  if(small) size = Size.SMALL;
  if(medium) size = Size.MEDIUM;
  if(large) size = Size.LARGE;

  let clazz = `o-page-wrapper is-size-${size} ${className||""}`;
  return <div {...np} className={clazz} />
};
