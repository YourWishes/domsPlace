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
import { LinkProps, Link } from '@yourwishes/app-simple-react/dist/public';
import { Loader } from './../../loader/';
import './styles.scss';

export enum ButtonStyle {
  PRIMARY='is-primary',
  SECONDARY='is-secondary'
};

export enum ButtonSize {
  NORMAL = 'is-normal',
  LARGE = 'is-large'
}


export type ButtonProps = LinkProps & {
  className?:string,
  style?:ButtonStyle,
  to?:string,
  disabled?:boolean,
  loading?:boolean,

  size?:ButtonSize,
  large?:boolean,

  primary?:boolean,
  secondary?:boolean
}

export const Button = (props:ButtonProps) => {
  let { className, children, style, size, large, disabled, loading } = props;

  if(large) size = ButtonSize.LARGE;

  if(props.primary) style = ButtonStyle.PRIMARY;
  if(props.secondary) style = ButtonStyle.SECONDARY;

  let clazz = `o-btn ${style||ButtonStyle.PRIMARY}`;
  if(className) clazz += ` ${className}`;
  if(size && size != ButtonSize.NORMAL) clazz += ` ${size}`;
  if(disabled) clazz += ' is-disabled';

  if(loading) {
    children = <> { children } <Loader /> </>;
    clazz += ' is-loading';
  }

  let np = {...props};
  [
    'style','large','size','primary','secondary', 'loading'
  ].forEach(e => delete np[e]);

  return (
    <Link {...np} className={clazz}>
      { children }
    </Link>
  );
};

export const ButtonGroup = (props:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...props} className={`o-btn-group ${props.className||""}`} />
);
