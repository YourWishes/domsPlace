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
import { PageBoundary } from './../../Page';
import Section, { SplitSection, Split } from './../../../section/Section';
import ContentBox from './../../../content/ContentBox';
import { Title, Subtitle, Paragraph, Heading1 } from './../../../typography/Typography';
import ElementScrollFader from './../../../animation/fade/ElementScrollFader';

export default (props) => {
  return (
    <Section className="p-about-page__promo p-about-page__promo-work">
      <PageBoundary>
        {/* Title */}
        <SplitSection align="center">
          <Split padded>
            <ElementScrollFader from="left">
              <ContentBox box>
                <Title>Some of my work</Title>
                <Paragraph>
                  Interested to see what I can do? Check out some of
                  my personal favourite projects!
                </Paragraph>
              </ContentBox>
            </ElementScrollFader>
          </Split>

          <Split padded>
            {/* Empty Space */}
          </Split>
        </SplitSection>
      </PageBoundary>
    </Section>
  );
}
