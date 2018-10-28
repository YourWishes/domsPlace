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

import Styles from './SplitSection.scss';

import Section from './../Section';

export default (props) => {
  let { align, className } = props;
  align = align || "stretched";

  let clazz = "c-split-section is-" + align;
  if(className) clazz += ` ${className}`;

  return (
    <Section {...props} className={clazz} />
  )
};

const Split = props => {
  let newProps = {...props};
  let { padded, className, children } = props;

  ["padded"].forEach(e => delete newProps[e]);

  let clazz = "c-split-section__split";
  if(padded) clazz += " is-padded";
  if(className) clazz += ` ${className}`;

  return <div {...newProps} className={clazz} />;
}


export {
  Split
}
