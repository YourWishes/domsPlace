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
import Page from './../Page';

import BannerSection from './sections/BannerSection';
import PromoVideoSection from './sections/PromoVideoSection';
import ProgrammingSection from './sections/ProgrammingSection';
import PlatformsSection from './sections/PlatformsSection';
import ExistingWorkSection from './sections/ExistingWorkSection';

const AboutPage = (props) => {
  //Return
  return (
    <Page style="home-page" className="p-about-page">

      { /* Banner */ }
      <BannerSection />

      { /* Promo Video */ }
      <PromoVideoSection />

      {/* Programming */}
      <ProgrammingSection />

      {/* Platforms */}
      <PlatformsSection />

      {/* Existing Work */}
      <ExistingWorkSection />
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {
    code: state.language.code
  };
}

export default connect(mapStateToProps)(AboutPage);
