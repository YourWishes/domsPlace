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

export type SiteBoxProps = {
  to:string,
  src: ImageSource
};

export const SiteBox = (props:SiteBoxProps) => (
  <Link to={props.to} className="c-shopify-section__mosaic-box" {...{target: "_blank"}}>
    <Image src={props.src} className="c-shopify-section__mosaic-box-image" width={500} maxWidth={500} />
  </Link>
);

export const ShopifySection = () => (
  <Section className="c-shopify-section">
    <PageBoundary className="c-shopify-section__boundary">
      <div className="c-shopify-section__mosaic">
      <SiteBox src={require('./../../../../assets/images/websites/bundlfresh.jpg')} to="//bundlfresh.com/" />
      <SiteBox src={require('./../../../../assets/images/websites/cocksox.jpg')} to="//cocksox.com" />
      <SiteBox src={require('./../../../../assets/images/websites/stateofescape.jpg')} to="//stateofescape.com" />

        <div className="c-shopify-section__mosaic-pad" />
      </div>

      <div className="c-shopify-section__content">
        <Heading3 className="c-shopify-section__title">
          Shopify Plus
        </Heading3>

        <p>
          I'm currently working full-time as a Senior Full-Stack Developer for
          Shopify Plus at <a href="//processcreative.com.au">Process Creative</a>.
          I have been working with it every day since September 2017 and enjoy
          working with the platform immensely.
        </p>

        <p>
          Working with Liquid, REST and GraphQL App Development and general
          Shopify tools development, I have had the privilage of working with
          over 40 different Shopify Plus clients, and over 50 Shopify core clients.
        </p>

        <p>
          Despite Shopify's seemingly limited development environment, I have
          been able to make it do tricks thought impossible. I love finding
          unique solution's to Shopify's limitations, and will continuously
          find ways to surprise everyone, including myself.
        </p>
      </div>
    </PageBoundary>
  </Section>
);
