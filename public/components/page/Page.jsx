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
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import PageBoundary from './PageBoundary';
import Language from '@public/language/Language';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, style, className } = this.props;

    let clazzes = "c-page";

    if(className) clazzes += " " + className;

    let titleHelmet;
    if((!title || !title.length) && this.props.style != "home-page") {
      console.exception("This page (" + (this.props.style || this.props.className) + ") does not have a title!");
    } else {
      titleHelmet = <title>{ this.props.title }</title>
    }

    return (
      <div className={clazzes}>
        <Helmet defaultTitle={ Language.get("site.title") } titleTemplate={ Language.get("site.titleTemplate") }>
          { titleHelmet }
        </Helmet>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(Page);

export {
  PageBoundary
}
