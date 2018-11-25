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
import { withBlogTemplate} from '@public/blog/Blog';
import Page, { PageBoundary } from '@components/page/Page';

import FeaturedArticleSection from '@sections/blog/article/FeaturedArticleSection';
import ArticleGridSection from '@sections/blog/article/ArticleGridSection';
import ClearSection from '@sections/layout/ClearSection';

import Loader from '@objects/loading/Loader';
import Pagination from '@objects/pagination/Pagination';

import Styles from './BlogPage.scss';

export default withBlogTemplate(withLanguage(props => {
  let { lang, articles, page, pages, pending, error } = props;

  console.log(props);

  let children;

  if(error) error = "An error occured";
  if(pending) pending = <Loader />;

  if(articles && articles.length) {
    children = (
      <React.Fragment>
        <FeaturedArticleSection article={ articles.shift() } />
        <ArticleGridSection articles={ articles } />
        <Pagination page={ page } pages={ pages } to="/blog/$page" />
      </React.Fragment>
    );
  }

  /*
  */

  return (
    <Page
      style="blog-page" className="p-blog-page" title={ lang.pages.blog.title }
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
