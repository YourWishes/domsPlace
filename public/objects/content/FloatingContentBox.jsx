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

export default function(props) {
  let clazzes = "o-floating-content-box";

  //Positions
  let position = "middle center";
  if(props.position) position = props.position;
  clazzes += " " + position.split(" ").map(i => 'is-'+i).join(" ");

  //Sizes`
  let size = "medium";
  if(props.size) size = props.size;
  clazzes += " is-"+size;

  //Custom Classes
  if(props.className) clazzes += " " + props.className;

  return (
    <ContentBox {...props} className={ clazzes }>
      <div className="o-floating-content-box__inner">
        { props.children }
      </div>
    </ContentBox>
  );
}