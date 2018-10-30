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
import * as LanguageActions from './../actions/LanguageActions';

import enAU from './en-AU.jsx';

export const LANGUAGES = {
  'en-AU': enAU
}

class Language {
  constructor() {
    this.setLanguage("en-AU");
  }

  setLanguage(lang) {
    this.langName = lang;
    this.dataRaw = LANGUAGES[lang];

    //Now parse
    this.data = this.parseRecursive(this.dataRaw);
  }

  getLanguage() {
    return this.langName;
  }

  parseRecursive(o) {
    let keys = Object.keys(o);
    let p = {};
    keys.forEach(key => {
      let d = o[key];
      if(typeof d === typeof undefined) d = null;
      if(typeof d === 'function') {
        p[key] = d();
        return;
      }
      if(typeof d === 'string') {
        p[key] = d;
        return;
      }
      p[key] = this.parseRecursive(d);
    });
    return p;
  }

  getLanguages() {
    return Object.keys(LANGUAGES);
  }
}
const lang = new Language();
export default lang;

export const LanguageTools = {
  random: function(someArray) {
    return someArray[Math.floor(Math.random() * someArray.length)];
  }
}

export const withLanguage = Wrapped => {
  let LanguageWrapper = props => {
    return <Wrapped {...props} />;
  };

  return connect(state => {
    return {
      language: state.language.code,
      lang: lang.data
    }
  }, dispatch => {
    return {
      setLanguage: language => {
        dispatch(LanguageActions.setLanguage(language));
      }
    };
  })(LanguageWrapper);
};
