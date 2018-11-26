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

import { withLanguage } from '@public/language/Language';
import { withArticleTemplate } from '@public/blog/Blog';

import Page, { PageBoundary } from '@components/page/Page';

import ErrorSection from '@sections/error/ErrorSection';
import ClearSection from '@sections/layout/ClearSection';

import Loader from '@objects/loading/Loader';
import ContentBox from '@objects/content/box/ContentBox';
import { Title, Paragraph } from '@objects/typography/Typography';
import Image from '@objects/image/Image';

import Styles from './ArticlePage.scss';

export default withArticleTemplate(withLanguage(props => {
  let { error, pending, article, lang } = props;
  let l = lang.pages.article;


  let children;
  if(error) error = <ErrorSection title={l.error.title} body={l.error.body} error={error} />;
  if(pending) pending = <Loader />;

  if(article) {
    children = (
      <PageBoundary>
        <article
          role="article" itemScope itemType="http://schema.org/Article"
          className="p-article-page__article"
        >
          {/* Title */}
          <ContentBox box itemProp="name" className="p-article-page__header">
            <Title children={ article.title } />
          </ContentBox>

          {/* Image */}
          <div className="p-article-page__picture">
            <ContentBox box>
              <Image
                src={ article.image } maxWidth="800" loadable
                className="p-article-page__picture-image"
              />
            </ContentBox>
          </div>

          {/* Description */}
          <ContentBox box itemProp="description" className="p-article-page__description">
            <Paragraph>
              { article.description || article.shortDescription }
            </Paragraph>
          </ContentBox>
        </article>
      </PageBoundary>
    );
  }

  return (
    <Page
      style="article-page" className="p-article-page"
      title={error ? l.error.title : l.title}
      background={require('@assets/images/banners/sunset.svg')}
    >
      <ClearSection />
      { error }
      { pending }
      { children }
      <ClearSection />
    </Page>
  );
}));
