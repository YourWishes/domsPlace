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
import Loader from './../loading/Loader';

//Adjust the order to adjust the load position
const VALID_SOURCES = [
  "webm",
  "mp4",
  "ogg"
]

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: Add image fallback support.
    //TODO: Add state support, as well as functional controls.

    //Sources
    let sources = [];
    let sourceProps = this.props.sources ? this.props.sources : this.props;

    for(let i = 0; i < VALID_SOURCES.length; i++) {
      let s = VALID_SOURCES[i];
      if(!sourceProps[s]) continue;
      //sources.push(<source type={"video/"+s} src={sourceProps[s]} key={s} />);
    }

    //Classes
    let clazz = "o-video";
    if(this.props.className) clazz += " " + this.props.className;
    if(sourceProps.image) clazz += " has-image";
    if(sourceProps.gif) clazz += " has-gif";
    if(this.props.autoplay) clazz += " is-autoplaying";
    if(this.props.loop) clazz += " is-looping";

    let videoClass = "o-video__video";
    if(this.props.fill) videoClass += " is-full";


    //Fallback.
    let fallback;

    return (
      <div className={clazz}>
        { /* Video Element (And sources) */ }
        <video
          className={ videoClass }
          autoPlay={this.props.autoPlay}
          loop={this.props.loop}
          controls={false /* Explicitly no controls */}
        >
          { sources }
        </video>

        {/* Loader */}
        <Loader />

        { /* Fallback Picture */ }
        { fallback }
      </div>
    );
  }
}

export default Video;
