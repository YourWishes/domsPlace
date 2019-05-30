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
import { Button } from './../../../../objects/widgets/button/';

import './styles.scss';

export const ContactSection = () => (
  <Section className="c-contact-section">
    <PageBoundary size="small" className="c-contact-section__boundary">
      <Heading2>Get in touch</Heading2>
      <p>
        Want to get in touch, pick my brain or just have a chat?<br />
        Head over to my contact page and feel free to reach out.
      </p>

      <Button to="/contact" large>Contact Me</Button>
    </PageBoundary>
  </Section>
);
