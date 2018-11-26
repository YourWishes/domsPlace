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
import { NavLink } from 'react-router-dom';

import { withLanguage } from '@public/language/Language';
import Section from '@sections/Section';
import { PageBoundary } from '@components/page/Page';

import Image from '@objects/image/Image';
import Button from '@objects/input/button/Button';
import ContentBox from '@objects/content/box/ContentBox';
import { Title, Paragraph } from '@objects/typography/Typography';

import Styles from './FeaturedArticleSection.scss';

export default withLanguage(props => {
  let { article, lang } = props;

  return (
    <Section>
      <PageBoundary>
        <article role="article" itemScope itemType="http://schema.org/Article" className="c-featured-article">
          <ContentBox box className="c-featured-article__content">
            <NavLink to={ article.url } className="c-featured-article__box is-image">
              <Image
                src={ article.image } className="c-featured-article__image"
                maxWidth="800" loadable
              />
            </NavLink>

            <div className="c-featured-article__box is-content">
              <ContentBox box className="c-featured-article__heading">
                <NavLink to={ article.url }>
                  <Title itemProp="name" className="c-featured-article__title">
                    { article.title }
                  </Title>
                </NavLink>
              </ContentBox>

              <Paragraph itemProp="description" children={ article.shortDescription } />
              <NavLink itemProp="sameAs" to={ article.url } children={ lang.blog.article.readMore } />
            </div>
          </ContentBox>
        </article>
      </PageBoundary>
    </Section>
  );
});
