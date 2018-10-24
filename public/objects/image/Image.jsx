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

export default (props) => {
  let newProps = {...props};

  let {
    loadable, image, src, alt, width, height, sources, onLoad, onError,
    maxWidth, maxHeight, images
  } = props;


  [
    "loadable", "image", "src", "alt", "width", "height", "sources", "onLoad",
    "onError", "maxWidth", "maxHeight", "images"
  ].forEach(e => delete newProps[e]);

  width = parseInt(width);
  maxWidth = parseInt(maxWidth);
  height = parseInt(height);
  maxHeight = parseInt(maxHeight);

  if(loadable) return <LoadableImage {...props} />;

  //Prop Manipulation
  if(image) {
    if(Array.isArray(image)) {
      sources = sources || image;
    } else {
      src = src || image;
    }
  }

  if(src) {
    if(src.images) sources = sources || src.images;
    if(src.width) width = width || src.width;
    if(src.height) height = height || src.height;
  }

  //Image
  sources = sources || {};
  let sourceElements = [];

  let defaultSrc = src;
  let defaultAlt = alt;
  let defaultWidth = width;
  let defaultHeight = height;

  if(sources) {
    //Iterate over supplied sources
    for(let i = 0; i < sources.length; i++) {
      let source = sources[i];
      let width = source.size || source.width;
      let isLast = (i+1) === sources.length;

      for(let scale = 1; scale <= 4; scale++) {//4 = max scales
        let scaledWidth = Math.round(width / scale);
        let o = {...source};
        o.scale = scale;
        o.isLast = isLast;
        sources[scaledWidth] = sources[scaledWidth] || [];
        sources[scaledWidth].push(o);
      }
    }

    //Sort by size in descending order
    let keys = Object.keys(sources);
    keys.sort((l, r) => {
      return parseInt(l) - parseInt(r);
    });

    let breakNext = false;
    for(let i = 0; i < keys.length; i++) {
      if(breakNext) break;
      let k = keys[i];//The pixel size

      let ss = sources[k];//Sources at this pixel resolution
      let mediaQuery = `(max-width:${k}px)`;
      let sss = [];

      let isNextBreak = false;
      if(maxWidth && (i+1 < keys.length)) {
        if(keys[i+1] > parseInt(maxWidth)) isNextBreak = true;
      }
      if(isNextBreak) {
        breakNext = true;
        mediaQuery = `(min-width:${k}px)`;
      }

      if(ss.length && ss[0].isLast) {
        let prev = i > 0 ? keys[i-1] : 0;
        mediaQuery = `(min-width:${prev}px)`;
      }

      for(let x = 0; x < ss.length; x++) {
        let scale = ss[x];
        let source = scale.src || scale.path;
        sss.push( source + (scale.scale && scale.scale!=1 ? " "+scale.scale+"x" : "") );
      }

      sourceElements.push(<source media={mediaQuery} srcSet={sss.join(", ")} key={i} />);
    }
  }

  return (
    <picture>
      { sourceElements }
      <img
        {...newProps}
        onLoad={ onLoad }
        onError={ onError }
        src={ defaultSrc }
        alt={ defaultAlt }
        width={ defaultWidth }
        height={ defaultHeight }
      />
    </picture>
  );
}
