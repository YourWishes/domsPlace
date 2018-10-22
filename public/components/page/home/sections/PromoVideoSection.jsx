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
import Language from './../../../language/Language';
import Page, { PageBoundary } from './../../Page';
import Section, {  SplitSection, Split } from './../../../section/Section';
import FloatingContentBox from './../../../content/FloatingContentBox';
import ContentBox from './../../../content/ContentBox';
import Video from './../../../video/Video';
import { Title, Subtitle, Paragraph, Heading1 } from './../../../typography/Typography';
import ElementScrollFader from './../../../animation/fade/ElementScrollFader';


export default (props) => {
  return (
    <Section className="p-home-page__promo p-home-page__promo-video">
      <PageBoundary>
        <SplitSection align="center">

          <Split className="u-text-center" padded>
            <ElementScrollFader>
              <Video
                image={ require('./../../../videos/bunny/big_buck_bunny.jpg') }
                mp4={ require('./../../../videos/bunny/big_buck_bunny.mp4') }
                controls
              />
            </ElementScrollFader>
          </Split>

          <Split className="u-text-center" padded>
            <ElementScrollFader from="bottom">
              <ContentBox box>
                <Title>
                  { Language.get("pages.home.video.heading") }
                </Title>
                <Paragraph>
                  { Language.get("pages.home.video.paragraph") }
                </Paragraph>
              </ContentBox>
            </ElementScrollFader>
          </Split>

        </SplitSection>
      </PageBoundary>
    </Section>
  );
}
