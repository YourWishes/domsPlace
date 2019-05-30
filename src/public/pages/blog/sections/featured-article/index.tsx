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
import { Image, Link } from '@yourwishes/app-simple-react/dist/public'
import { BlogArticle } from './../../../../types/';
import { Section } from './../../../../components/section';
import { Heading2 } from './../../../../objects/typography/heading/';
import { Button } from './../../../../objects/widgets/button/';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { getArticleURL } from './../../../../data/articles/';

import './styles.scss';

export interface FeaturedArticleProps {
  article:BlogArticle
};

export const FeaturedArticle = (props:FeaturedArticleProps) => {
  let { article } = props;
  let { title, short, image } = article;
  let url = getArticleURL(article);

  return (
    <Section className="c-featured-article">
      <PageBoundary size="medium" className="c-featured-article__boundary">

        {/* Title */}
        <Heading2 className="c-featured-article__title">
          <Link to={url}>{ title }</Link>
        </Heading2>

        {/* Image */}
        <Link to={url} className="c-featured-article__picture" title={title}>
          <Image src={image} className="c-featured-article__picture-image" alt={title} />
        </Link>

        {/* Short Description (content) */}
        <div className="c-featured-article__content">
          { short() }
        </div>

        {/* Read More button */}
        <Button to={url} large className="c-featured-article__btn">
          Read More
        </Button>

      </PageBoundary>
    </Section>
  );
};
