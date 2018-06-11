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

class ElementScrollFader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
    this.onScrollBound = this.onScroll.bind(this);
    this.checkEffectBound = this.checkEffect.bind(this);
  }

  componentDidMount() {
    if(!this.initialCheckFunction) {
      this.initialCheckFunction = setTimeout(this.checkEffectBound, 300);
    }

    document.addEventListener('scroll', this.onScrollBound, true);
    document.addEventListener("DOMContentLoaded", this.onScrollBound);
  }

  componentWillUnmount() {
    this.detachListener();
  }

  onScroll(e) {
    this.checkEffect();
  }

  //Common functions
  detachListener() {
    document.removeEventListener('scroll', this.onScrollBound);
    document.removeEventListener("DOMContentLoaded", this.onScrollBound);
    if(this.initialCheckFunction) clearTimeout(this.initialCheckFunction);
  }

  checkEffect() {
    if(!this.refs || !this.refs.fader) return;
    //Get bounds
    var rect = this.refs.fader.getBoundingClientRect();
    //If our top is at least half way UP the page, show
    if(rect.top > window.innerHeight / 2) return;
    this.setState({visible: true});
    this.detachListener();//stop Listening

    if(this.props.onVisible) {
      this.props.onVisible(this.refs.fader);
    }
    return true;
  }

  render() {
    let clazz = "o-element-scroll-fader";

    if(this.props.from) {
      clazz += " from-" + this.props.from
    } else {
      clazz += " from-top";
    }
    if(this.state.visible) {
      clazz += " is-visible";
    }

    if(this.props.className) clazz += " " + this.props.className;

    return (
      <div className={ clazz } ref="fader">
        { this.props.children}
      </div>
    );
  }
}

export default ElementScrollFader;
