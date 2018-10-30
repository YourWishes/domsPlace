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

const TestBlogData = {
  handle: "test-blog",
  title: "Test Blog Article",
  url: '/',
  image: require('@assets/images/photo.jpg'),
  shortDescription: "Read how the latest lorem ipsum is dolor sit amet for business owners..."
};

export default withLanguage(props => {
  let { lang } = props;

  return (
    <Page style="blog-page" className="p-blog-page" title={ lang.pages.blog.title }>
      {/* First (Featured) Blog */}
      <FeaturedArticleSection article={ TestBlogData } />
    </Page>
  );
});
