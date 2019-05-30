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
import { Section } from './../../../../components/section/';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Heading2 } from './../../../../objects/typography/heading/';

import './styles.scss';

export const ProgrammerSection = () => (
  <Section className="c-programmer-section">
    <PageBoundary size="small" className="c-programmer-section__boundary">
      <Heading2>Programmer</Heading2>
      <p>
        I am a programmer, born and bred. I have been programming since I was
        around 11 years old and continue to advance my skills more and more
        everyday.
      </p>

      <p>
        Programming is my work and my passion. With over 15 years of experience,
        and countless lines of code written, there isn't much I can't develop.
      </p>
    </PageBoundary>
  </Section>
);
