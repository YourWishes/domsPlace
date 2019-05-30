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
import { getArticleByHandle, getArticleURL } from './../../data/articles/';
import { LoadableComponent } from '@yourwishes/app-simple-react/dist/public';
import { BlogArticle } from './../../types/';
import { PageWrapper } from './../../components/page/wrapper/';
import { NotFoundPage } from './../404';
import { Loader } from './../../objects/loader';
import { PageBoundary } from './../../objects/page/boundary/';
import { Breadcrumb } from './../../objects/widgets/breadcrumb/';
import { Heading1 } from './../../objects/typography/heading/';

import './styles.scss';



export interface ArticleProps {
  article:BlogArticle
};

export const ArticleLoader = (props:ArticleProps) => <Loader />;

export class ArticlePage extends React.Component<any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    //Find article by handle
    let article:BlogArticle;

    let handle = this.props.match.params.handle as string;
    if(handle && handle.length) article = getArticleByHandle(handle);

    if(!article) return <NotFoundPage />;

    let url = getArticleURL(article);

    return <PageWrapper title={article.title}>
      <article className="p-article__article" itemScope itemType="http://schema.org/Article">
        {/* Meta Details */}
        <meta itemProp="dateCreated" content={article.date.toString()} />
        <meta itemProp="image" content={typeof article.image === "string" ? article.image : article.image.src} />
        <meta itemProp="url" content={url} />

        <PageBoundary className="p-article__inner" size="small">
          <Breadcrumb crumbs={[
            {title:'Blog', to:'/blog'},
            {title:article.title, to:url}
          ]} />
          <Heading1 itemProp="name">{ article.title }</Heading1>

          {/* Loading Component */}
          <LoadableComponent<ArticleProps>
            load={article.description} loadKey={getArticleURL(article)}
            loading={ArticleLoader} article={article}
          />
        </PageBoundary>
      </article>
    </PageWrapper>;
  }
}

export default ArticlePage;
