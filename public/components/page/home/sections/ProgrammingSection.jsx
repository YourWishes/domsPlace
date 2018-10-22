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
import Language from './../../../../language/Language';
import { PageBoundary } from './../../Page';
import { ImageSection } from './../../../section/Section';
import ContentBox from './../../../../objects/content/ContentBox';
import { Title, Paragraph, Heading1 } from './../../../../objects/typography/Typography';
import ElementScrollFader from './../../../../objects/animation/fade/ElementScrollFader';

export default (props) => {
  return (
    <ImageSection
      className="p-home-page__promo p-home-page__promo-programming"
      src={ require('./../../../../assets/images/patterns/rhythm-heaven.svg') }
      loadable
      background
    >
      <PageBoundary small>
        <ElementScrollFader from="bottom">
          <ContentBox box>
            <Heading1 className="u-text-center">
              { Language.get("pages.home.programming.heading") }
            </Heading1>
            { Language.get("pages.home.programming.paragraph") }
          </ContentBox>
        </ElementScrollFader>
      </PageBoundary>
    </ImageSection>
  );
}
