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

export default function(props) {
  let style = props.style || "test";
  let styleClassPrefix = "o-background--style-"+style;
  let inners = [];

  if(style == "twilight") {
    inners.push(
      <img
        src={ require('./../images/palm.svg') }
        className={"o-background__palm "+style+"__palm"} key="palm"
      />
    );
    inners.push(<div className={"o-background__grain "+style+"__grain"} key="grain"></div>);
  }

  return (
    <div className={"o-background "+styleClassPrefix}>
      <div className={"o-background__inner " + styleClassPrefix + "__inner" }>
        { inners }
      </div>
    </div>
  );
}
