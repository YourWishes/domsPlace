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
import { Link, Image, ImageSource } from '@yourwishes/app-simple-react/dist/public';
import { Section } from './../../../../components/section/';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Heading3 } from './../../../../objects/typography/heading/';

import './styles.scss';

export interface WebDevBoxProps {
  to:string,
  src:ImageSource
};

export const WebDevBox = (props:WebDevBoxProps) => (
  <div className="c-webdev-section__media-box">
    <Link to={props.to} className="c-webdev-section__media-box-inner">
      <Image src={props.src} className="c-webdev-section__media-box-image" />
    </Link>
  </div>
);

export const WebDevSection = () => (
  <Section className="c-webdev-section">
    <PageBoundary className="c-webdev-section__boundary">
      {/* Image */}
      <div className="c-webdev-section__media">
        <WebDevBox
          src={require('./../../../../assets/images/websites/solinvictus.jpg')}
          to="//www.solinvictus.com.au/"
        />

        <WebDevBox
          src={require('./../../../../assets/images/websites/earjobs.jpg')}
          to="//www.earjobs.com.au"
        />

        <WebDevBox
          src={require('./../../../../assets/images/websites/kopalife.jpg')}
          to="//www.kopalife.com/products/kube-customise"
        />
      </div>

      {/* Content */}
      <div className="c-webdev-section__content">
        <Heading3 className="c-webdev-section__title">
          Full-Stack Web Dev
        </Heading3>
        <p>
          I have spent over 10 years working with both modern and traditional web
          tech stacks, including NodeJS, TypeScript, React, ES6, Webpack, Babel,
          SCSS, PHP, ASP, SQL and more.
        </p>

        <p>
          My specialty is making beautiful and interactive online web experiences.
          Why must web suck? I am to prove that it doesn't always have to.
        </p>

        <p>
          If you're interested in seeing some of my best work head over to
          my <Link to="/projects">projects</Link> section and see what I've
          worked on!
        </p>
      </div>

    </PageBoundary>
  </Section>
);
