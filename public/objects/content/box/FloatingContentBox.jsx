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

import ContentBox from './ContentBox';

import Styles from './FloatingContentBox.scss';

export default (props) => {
  let newProps = {...props};
  let { position, size, children, className } = props;

  ["position","size","children"].forEach(e => delete newProps[e]);

  let clazzes = "o-floating-content-box";

  //Positions
  position = position || "middle center";
  clazzes += " " + position.split(" ").map(i => 'is-'+i).join(" ");

  //Sizes`
  size = size || "medium";
  clazzes += ` is-${size}`;

  //Custom Classes
  if(className) clazzes += ` ${className}`;

  return (
    <ContentBox {...newProps} className={ clazzes }>
      <div className="o-floating-content-box__inner">
        { children }
      </div>
    </ContentBox>
  );
}
