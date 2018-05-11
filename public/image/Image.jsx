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

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sourceElements = [];
    let sources = {};

    if(this.props.sources) {
      //Iterate over supplied sources
      for(let i = 0; i < this.props.sources.length; i++) {
        let x = this.props.sources[i];
        let w = x.size;
        sources[w] = sources[w] || [];
        sources[w].push(x);
      }

      //Now map to components I guess
      let keys = Object.keys(sources);
      for(let i = 0; i < keys.length; i++) {
        let k = keys[i];
        let j = sources[k];
        let q = j[0];
        let mediaQuery = '(max-width:'+q.size+'px)';
        let sss = [];
        for(let p = 0; p < j.length; p++) {
          let v = j[p];
          sss.push(v.src + (v.scale && v.scale != 1 ? " "+v.scale+"x" : "" ) );
        }

        sourceElements.push(
          <source media={mediaQuery} srcset={ sss.join(", ") } key={i} />
        );
      }
    }

    return (
      <picture>
        { sourceElements }
        <img src={ this.props.src } alt={ this.props.alt } className={ this.props.className } />
      </picture>
    );
  }
}
