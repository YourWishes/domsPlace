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

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={
          "c-section" +
          (this.props.full?" is-full":"") +
          (this.props.className ? " "+this.props.className : "")
      }>
        { this.props.children }
      </section>
    );
  }
}

import BodySection from './body/BodySection';
import ClearSection from './layout/ClearSection';
import FeaturedBlogSection from './blog/FeaturedBlogSection';
import ImageSection from './image/ImageSection';
import SplitSection, { Split }  from './layout/SplitSection';
import VideoSection from './video/VideoSection';

export {
  BodySection,
  ClearSection,
  FeaturedBlogSection,
  ImageSection,
  SplitSection,
  Split,
  VideoSection
}