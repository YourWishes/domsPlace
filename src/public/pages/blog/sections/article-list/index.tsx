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
import { Image, Link } from '@yourwishes/app-simple-react/dist/public';
import { Section } from './../../../../components/section';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Heading3 } from './../../../../objects/typography/heading/';
import { BlogArticle } from './../../../../types/';
import { getArticleURL } from './../../../../data/articles/';

import './styles.scss';

export interface ArticleListProps {
  articles:BlogArticle[]
};

export const ArticleList = (props:ArticleListProps) => {
  return (
    <Section className="c-article-list">
      <PageBoundary size="medium" className="c-article-list__boundary">
        {props.articles.map(
          (article,i) => <ArticleThumbnail article={article} key={'article'+i} />
        )}
      </PageBoundary>
    </Section>
  );
};

export interface ArticleThumbnailProps {
  article:BlogArticle
};


export const ArticleThumbnail = (props:ArticleThumbnailProps) => {
  let { article } = props;
  let url = getArticleURL(article);

  return (
    <article className="c-article-list__article">
      <Link to={url} className="c-article-list__article-inner">
        <div className="c-article-list__article-picture">
          <Image src={ article.image} className="c-article-list__article-picture-image" />
        </div>

        <Heading3  className="c-article-list__article-title">
          { article.title }
        </Heading3>
      </Link>
    </article>
  );
};
