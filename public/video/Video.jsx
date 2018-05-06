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

const VALID_SOURCES = [
  "mp4",
  "webm",
  "ogg"
]

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: Add image fallback support.
    let sources = [];
    let sourceProps = this.props.sources ? this.props.sources : this.props;

    for(let i = 0; i < VALID_SOURCES.length; i++) {
      let s = VALID_SOURCES[i];
      if(!sourceProps[s]) continue;
      sources.push(<source type={"video/"+s} src={sourceProps[s]} key={s} />);
    }

    let clazz = "o-video";
    if(this.props.className) clazz += " " + this.props.className;

    return (
      <video className={clazz}>
        { sources }
      </video>
    );
  }
}

export default Video;
