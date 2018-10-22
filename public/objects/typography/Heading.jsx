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

const Heading = (props) => {
  let level = props.level || 1;
  let CustomTag = "h"+level;
  let clazz = "o-heading o-heading--"+level;
  if(props.className) clazz += " " + props.className;


  return (
    <CustomTag {...props} className={clazz} />
  );
}
export default Heading;

const Heading1 = (props) => { return <Heading {...props} level="1" />; };
const Heading2 = (props) => { return <Heading {...props} level="2" />; };
const Heading3 = (props) => { return <Heading {...props} level="3" />; };
const Heading4 = (props) => { return <Heading {...props} level="4" />; };
const Heading5 = (props) => { return <Heading {...props} level="5" />; };
const Heading6 = (props) => { return <Heading {...props} level="6" />; };

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
};
