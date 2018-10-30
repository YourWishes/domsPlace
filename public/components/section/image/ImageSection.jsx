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
import Styles from './ImageSection.scss';

import Section from './../Section';

import Image from '@objects/image/Image';

export default props => {
  let sectionProps = {...props};
  let imageProps = {...props};

  let { image, background, children, className, imageClassName } = props;

  ["children", "background", "loadable", "imageClassName"].forEach(e => delete sectionProps[e]);
  ["image", "full", "children", "background", "imageClassName"].forEach(e => delete imageProps[e]);

  let clazz = "c-image-section";
  let imageClazz = `c-image-section__image ${imageClassName||""}`;
  image = image || <Image {...imageProps} className={imageClazz} />;

  if(className) clazz += ` ${className}`;
  if(background) clazz += " is-background";

  return (
    <Section {...sectionProps} className={ clazz }>
      { image }
      <div className="c-image-section__content">
        <div className="c-image-section__content-inner">
          { children }
        </div>
      </div>
    </Section>
  );
}
