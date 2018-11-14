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
import Page, { PageBoundary } from '@components/page/Page';

import FeaturedArticleSection from '@sections/blog/article/FeaturedArticleSection';
import ArticleGridSection from '@sections/blog/article/ArticleGridSection';
import ClearSection from '@sections/layout/ClearSection';

import Styles from './BlogPage.scss';

const TestBlogData = {
  handle: "test-blog",
  title: "Test Blog Article",
  url: '/',
  image: require('@assets/images/photo.jpg'),
  shortDescription: `Read how the latest lorem ipsum is dolor sit amet for business owners...`,
  description: `Est magna esse amet admodum est ex noster elit quem probant, id qui minim
  possumus, ut esse enim esse senserit. Ullamco quae quis incurreret dolore.
  Laborum est ingeniis, quibusdam fugiat non deserunt adipisicing.Nam quid velit
  aut litteris, laborum export incididunt admodum et nam fabulas instituendarum,
  id nam praesentibus. Aliquip anim consequat, est export commodo praetermissum, e
  ab multos ingeniis ut ipsum ab laborum de tamen. Sed quem proident fidelissimae,
  quae te singulis o ita sint culpa qui ingeniis, e export officia. Quem vidisse
  ut quis aliqua.`
};

export default withLanguage(props => {
  let { lang } = props;

  return (
    <Page
      style="blog-page" className="p-blog-page" title={ lang.pages.blog.title }
      background={require('@assets/images/banners/sunset.svg')}
    >
      <ClearSection />
      {/* First (Featured) Blog */}
      <FeaturedArticleSection article={ TestBlogData } />
      <ArticleGridSection articles={[ TestBlogData, TestBlogData, TestBlogData, TestBlogData, TestBlogData]} />
    </Page>
  );
});
