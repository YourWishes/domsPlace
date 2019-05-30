// Copyright (c) 2019 Dominic Masters
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

import * as React from 'react';

import { Title } from './../../../../objects/typography/heading/';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Section } from './../../../../components/section/';

import './styles.scss';

export const BannerSection = () => (
  <Section className="c-about-banner">
    <PageBoundary className="c-about-banner__boundary">
      <div className="c-about-banner__pad" />

      <header role="banner" className="c-about-banner__content">
        <Title large className="c-about-banner__title">About Me</Title>
        <p className="c-about-banner__blurb">
          I'm just a nerd with a passion for coding, coffee, and video games.<br/>
          Programming since before the internet was cool.
        </p>
      </header>
    </PageBoundary>
  </Section>
);
