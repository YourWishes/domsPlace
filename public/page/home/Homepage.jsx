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
import Page, { PageBoundary } from './../Page';
import Section, { ImageSection } from './../../section/Section';
import FloatingContentBox from './../../content/FloatingContentBox';
import { Button } from './../../input/Inputs';
import Image from './../../image/Image';
import { Title, Subtitle } from './../../typography/Typography';

export default function() {
  return (
    <Page style="home-page" className="p-home-page">
      <ImageSection
        full
        src={ require('./../../images/test/img_red.png') }
        sources={[
          { src: require('./../../images/test/320x320.png'), size: 320 },
          { src: require('./../../images/test/320x320x2.png'), size: 320, scale: 2 },
          { src: require('./../../images/test/640x640.png'), size: 640 },
          { src: require('./../../images/test/1280x1280.png'), size: 640, scale: 2 },
          { src: require('./../../images/test/1280x1280.png'), size: 1280 }
        ]}
      >
        <PageBoundary fill>
          <FloatingContentBox position="middle right" size="small" className="u-text-center p-home-page__video-content">
            <Title>My Cool Page</Title>
            <Subtitle>Lorem ipsum dolor</Subtitle>
            <Button>Hello</Button>
          </FloatingContentBox>
        </PageBoundary>
      </ImageSection>

      <Section full>
        Lorem
      </Section>
    </Page>
  );
}
