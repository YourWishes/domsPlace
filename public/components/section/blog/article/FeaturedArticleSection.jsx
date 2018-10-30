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


import BannerImageSection from '@sections/image/banner/BannerImageSection';

import Image from '@objects/image/Image';
import ContentBox from '@objects/content/box/ContentBox';
import { Title, Paragraph } from '@objects/typography/Typography';

import Styles from './FeaturedArticleSection.scss';

export default props => {
  let { article } = props;

  return (
    <BannerImageSection
      className="c-featured-article"
      src={ require('@assets/images/photo.jpg') } alt={ article.title }
      loadable
    >
      <Title className="c-featured-article__title">
        { article.title }
      </Title>

      <Paragraph className="c-featured-article__description">
        { article.shortDescription }
      </Paragraph>
    </BannerImageSection>
  );
};
