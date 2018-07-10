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
import LoadableImage from './LoadableImage';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.loadable) {
      //return (<LoadableImage {...this.props} />);
    }

    let sourceProps = Object.assign({}, this.props);

    //Prop Manipulation
    if(sourceProps.image) {
      if(Array.isArray(sourceProps.image)) {
        sourceProps.sources = sourceProps.image;
      } else {
        sourceProps.src = sourceProps.image;
      }
    }

    if(sourceProps.src) {
      if(sourceProps.src.images) sourceProps.sources = sourceProps.src.images;
      if(sourceProps.src.width) sourceProps.width = sourceProps.src.width;
      if(sourceProps.src.height) sourceProps.height = sourceProps.src.height;
    }

    //Image
    let sourceElements = [];
    let sources = {};

    let defaultSrc = sourceProps.src;
    let defaultAlt = sourceProps.alt;
    let defaultWidth = sourceProps.width;
    let defaultHeight = sourceProps.height;

    console.log(defaultSrc);

    if(sourceProps.sources) {
      //Iterate over supplied sources
      for(let i = 0; i < sourceProps.sources.length; i++) {
        let x = sourceProps.sources[i];
        let width = x.size || x.width;
        let isLast = (i+1) === sourceProps.sources.length;

        for(let scale = 1; scale <= 4; scale++) {
          let scaledWidth = Math.round(width / scale);
          let o = Object.assign({}, x);
          o.scale = scale;
          o.isLast = isLast;
          sources[scaledWidth] = sources[scaledWidth] || [];
          sources[scaledWidth].push(o);
        }
      }

      let keys = Object.keys(sources);
      for(let i = 0; i < keys.length; i++) {
        let k = keys[i];//The pixel size
        let ss = sources[k];//Sources at this pixel resolution
        let mediaQuery = '(max-width:'+k+'px)';
        let sss = [];

        if(ss.length && ss[0].isLast) {
          let prev = i > 0 ? keys[i-1] : 0;
          mediaQuery = '(min-width:'+prev+'px)';
        }

        for(let x = 0; x < ss.length; x++) {
          let scale = ss[x];
          let source = scale.src || scale.path;
          sss.push( source + (scale.scale && scale.scale!=1 ? " "+scale.scale+"x" : "") );
        }

        sourceElements.push(
          <source media={mediaQuery} srcSet={ sss.join(", ") } key={i} />
        );
      }
    }

    return (
      <picture>
        { sourceElements }
        <img
          src={ defaultSrc }
          alt={ defaultAlt }
          className={ sourceProps.className }
          width={ defaultWidth }
          height={ defaultHeight }
        />
      </picture>
    );
  }
}
