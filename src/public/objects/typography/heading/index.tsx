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

export enum Type {
  H1='h1', H2='h2', H3='h3', H4='h4', H5='h5', H6='h6',
  SPAN='span'
}

export enum Size {
  TITLE='is-title',
  TITLE_LARGE='is-title-large',
  SUBTTITLE='is-subtitle',
  S1='is-size-1',
  S2='is-size-2',
  S3='is-size-3',
  S4='is-size-4',
  S5='is-size-5',
  S6='is-size-6'
}

export interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  type?:Type,
  size?:Size
}

export const Heading = (props:HeadingProps) => {
  let { size, type, className } = props;

  let np = {...props};
  ['size','type','large'].forEach(e => delete np[e]);

  size = size || Size.S1;

  let clazz = `o-heading ${size}`;

  if(!type) {
    switch(size) {
      case Size.TITLE:
        type = Type.H1; break;
      case Size.TITLE_LARGE:
        type = Type.H1; break;
      case Size.S1:
        type = Type.H1; break;
      case Size.S2:
        type = Type.H2; break;
      case Size.S3:
        type = Type.H3; break;
      case Size.S4:
        type = Type.H4; break;
      case Size.S5:
        type = Type.H5; break;
      case Size.S6:
        type = Type.H6; break;
      default:
        type = Type.SPAN; break;
    }
  }

  if(size == Size.TITLE) clazz = 'o-title';
  if(size == Size.TITLE_LARGE) clazz = 'o-title is-large';
  if(size == Size.SUBTTITLE) clazz = 'o-subtitle';
  if(className) clazz += ` ${className}`;

  let ElementType = type;
  return <ElementType {...np} className={clazz} />;
};

//Types
export const Title = (props:(
  HeadingProps & { large?:boolean }
)) => (
  <Heading {...props} size={props.size||(
    props.large ? Size.TITLE_LARGE : Size.TITLE
  )} type={props.type||Type.H1} />
);

export const Subtitle = (props:HeadingProps) => (
  <Heading {...props} size={props.size||Size.SUBTTITLE} type={props.type||Type.H2} />
);


export const Heading1 = Heading;

export const Heading2 = (props:HeadingProps) => (
  <Heading {...props} type={props.type||Type.H2} size={props.size||Size.S2} />
);

export const Heading3 = (props:HeadingProps) => (
  <Heading {...props} type={props.type||Type.H3} size={props.size||Size.S3} />
);

export const Heading4 = (props:HeadingProps) => (
  <Heading {...props} type={props.type||Type.H4} size={props.size||Size.S4} />
);

export const Heading5 = (props:HeadingProps) => (
  <Heading {...props} type={props.type||Type.H5} size={props.size||Size.S5} />
);

export const Heading6 = (props:HeadingProps) => (
  <Heading {...props} type={props.type||Type.H6} size={props.size||Size.S6} />
);
