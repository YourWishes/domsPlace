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

import Image from '@objects/image/Image';
import ContentBox from '@objects/content/box/ContentBox';
import FloatingContentBox from '@objects/content/box/FloatingContentBox';
import { Heading2, Paragraph } from '@objects/typography/Typography';

import Styles from './ArticleThumbnail.scss';

export default withLanguage(props => {
  let { className, article, lang, index } = props;
  index = (index || 0)%4;

  let pos = "";
  if(index/2.0 == Math.round(index/2)) {
    pos += "top";
    pos += index == 2 ? " left" : " right";
  } else {
    pos += "bottom";
    pos += index == 1 ? " left" : " right";
  }

  return (
    <article className={`o-article-thumbnail ${className||""}`}>
      <NavLink to={article.url} className="o-article-thumbnail__header">
        {/* Image */}
        <Image
          src={article.image} alt={article.title} loadable
          className="o-article-thumbnail__image"
          maxWidth="250"
        />

        {/* Title */}
        <FloatingContentBox box position={pos} className="o-article-thumbnail__title-box">
          <Heading2 className="o-article-thumbnail__title">
            { article.title }
          </Heading2>
        </FloatingContentBox>
      </NavLink>

      <ContentBox className="o-article-thumbnail__content">
        <Paragraph>
          { article.shortDescription }
        </Paragraph>

        <NavLink to={ article.url }>
          { lang.blog.article.readMore }
        </NavLink>
      </ContentBox>
    </article>
  );
});
