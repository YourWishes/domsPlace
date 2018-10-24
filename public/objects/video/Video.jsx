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
import Image from './../image/Image';

//Adjust the order to adjust the load position
const VALID_SOURCES = [
  "webm",
  "mp4",
  "ogg"
]

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    let { autoPlay, loop, controls } = props;
    if(typeof autoPlay === typeof undefined) autoPlay;
    if(typeof loop === typeof undefined) loop;
    if(typeof controls === typeof undefined) controls;

    //Initial State
    this.state = {
      autoPlay: autoPlay,
      loop: loop,
      loader: false,
      controls: controls
    };
  }

  componentDidMount() {
    let { video } = this.refs;
    video.addEventListener('playing',  () => this.onPlaying() );
    video.addEventListener('waiting',  () => this.onWaiting() );
    video.addEventListener('seeked',   () => this.onSeeked() );
    video.addEventListener('pause',    () => this.onPause() );
    video.addEventListener('loadstart',() => this.onLoadStart() );
  }

  componentWillUnmount() {
  }

  //Standard Events - https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
  onPlaying() {
    this.setState({
      loader: false
    });
  }

  onPause() {
    this.setState({
      loader: false
    });
  }

  onSeeked() {
    this.setState({
      loader: false
    });
  }

  onLoadStart() {
    if(this.isPaused()) return;
    this.setState({
      loader: true
    });
  }

  onWaiting() {
    this.setState({
      loader: true
    });
  }

  //Media Highlevel Functions
  isPaused() {
    return this.refs.video.paused
  }

  //React Render
  render() {
    let { autoPlay, loop } = this.state;
    let newProps = {...this.props};
    let { sources, className, gif, image } = this.props;

    sources = sources || [];
    let sourceElements = [];

    for(let i = 0; i < VALID_SOURCES.length; i++) {
      let s = VALID_SOURCES[i];
      if(!sourceProps[s]) continue;
      sourceElements.push(<source type={"video/"+s} src={sourceProps[s]} key={s} />);
    }

    //Classes
    let clazz = "o-video";
    if(className) clazz += ` ${className}`;
    if(sourceProps.image) clazz += " has-image";
    if(sourceProps.gif) clazz += " has-gif";
    if(this.state.autoplay) clazz += " is-autoplaying";
    if(this.state.loop) clazz += " is-looping";

    let videoClass = "o-video__video";
    if(this.props.fill) videoClass += " is-full";


    //Fallback.
    let fallback;
    if(sourceProps.image) {
      fallback = <Image image={sourceProps.image} alt={sourceProps.alt} className="o-video__image" />
    }

    //Loader
    let loader;
    if(this.state.loader) {
      loader = <Loader className="o-video__loader" />
    }


    return (
      <div className={clazz}>
        { /* Video Element (And sources) */ }
        <video
          className={ videoClass }
          autoPlay={this.state.autoPlay}
          loop={this.state.loop}
          controls={this.state.controls}
          ref="video"
        >
          { sources }
        </video>

        {/* Loader */}
        { loader }

        { /* Fallback Picture */ }
        { fallback }
      </div>
    );
  }
}
