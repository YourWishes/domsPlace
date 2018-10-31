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
import { withLanguage } from '@public/language/Language';

import Image from '@objects/image/Image';

import PageBoundary from './boundary/PageBoundary';

import Styles from './Page.scss';

export default withLanguage(props => {
  let { title, style, className, lang, children, background } = props;

  //Switch classes
  let clazzes = `c-page ${className||""}`;

  //Setup page title
  let titleHelmet;
  if((!title || !title.length) && style != "home-page") {
    console.exception(`This page (${style||className}) does not have a title!`);
  } else {
    titleHelmet = <title>{ title }</title>
  }

  //Extras
  let bg;
  if(background) {
    bg = <Image src={ background } className="c-page__background" loadable />;
    clazzes += ' has-background';
  }

  return (
    <div className={clazzes}>
      <Helmet defaultTitle={ lang.site.title } titleTemplate={ lang.site.titleTemplate }>
        { titleHelmet }
      </Helmet>
      { bg }
      { children }
    </div>
  );
});

export {
  PageBoundary
}
