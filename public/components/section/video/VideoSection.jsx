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

import Styles from './VideoSection.scss';

import Section from './../Section';

import Video from '@objects/video/Video';
import Loader from '@objects/loading/Loader';

export default (props) => {
  let { full, className, sources, children } = props;
  let videoProps = {...props};
  let sectionProps = {...props};

  [ "autoPlay", "fill", "loop", "sources" ].forEach(e => delete sectionProps[e]);
  [ "children" ].forEach(e => delete videoProps[e]);

  if(typeof props.autoPlay === typeof undefined) props.autoPlay = true;
  if(typeof props.loop === typeof undefined) props.loop = true;
  if(typeof props.fill === typeof undefined) props.fill = true;

  return (
    <Section {...sectionProps} className={`c-video-section ${className|""}`}>
      <Video {...videoProps} className="c-video-section__video" sources={ sources ? sources : props } />
      { children }
    </Section>
  );
}
