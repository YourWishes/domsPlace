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
import Image from './Image';
import Loader from './../loading/Loader';
import BoxSizer from './../layout/BoxSizer';

class LoadableImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  onLoad() {
    this.setState({
      loading: false
    });
  }

  onError() {
    this.setState({
      loading: false
    });
  }

  render() {
    let p = Object.assign({}, this.props);
    p.loadable = false;
    p.onLoad = this.onLoad.bind(this);
    let image = <Image {...p} />;

    let loader,imageSizerDuringLoad;

    if(this.state.loading) {
      loader = <Loader />;
      if(p.width && p.height) {
        imageSizerDuringLoad = <BoxSizer ratioWidth={p.width} ratioHeight={p.height} />
      }
    }

    return (
      <div className={"o-loadable-image " + (this.state.loading ? "is-loading" : "is-loaded")}>
        { loader }
        { imageSizerDuringLoad }

        <div className="o-loadable-image__image-container">
          { image }
        </div>
      </div>
    );
  }
}

export default LoadableImage;
