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
import { withLanguage } from '@public/language/Language';

import { PageBoundary } from '@components/page/Page';
import BannerSection from '@sections/banner/BannerSection';

import FloatingContentBox from '@objects/content/box/FloatingContentBox';
import { Title, Subtitle } from '@objects/typography/Typography';


export default withLanguage(props => {
  let { lang } = props;

  return (
    <BannerSection className="p-home-page__banner" width="3" height="1">
      <FloatingContentBox position="middle center" size="large" className="u-text-center">
        <Title>{ lang.pages.home.banner.title }</Title>
        <Subtitle>{ lang.pages.home.banner.subtitle }</Subtitle>
      </FloatingContentBox>
    </BannerSection>
  );
});
