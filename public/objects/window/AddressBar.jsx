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
import Frame from './Frame';
import { withLanguage } from '@public/language/Language';

class AddressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(e) {
    if(this.props.onChange) this.props.onChange(e);
  }

  render() {
    let { href, lang } = this.props;
    let clazz = "o-window__address-bar";

    return (
      <div className={clazz}>
        <span className="o-window__address-bar-title">
          { lang.window.address }
        </span>
        <Frame className="o-window__address-bar-frame">
          <input
            type="text"
            value={ href }
            className="o-window__input o-window__address-bar-input"
            onChange={e => this.onChange(e)}
          />
        </Frame>
      </div>
    );
  }
}

export default withLanguage(AddressBar);
