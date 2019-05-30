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
import { Section } from './../../../../components/section/';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Title, Subtitle } from './../../../../objects/typography/heading/';
import { ButtonGroup, Button } from './../../../../objects/widgets/button/';
import './styles.scss';

export const HomePageBanner = () => {
  return (
    <Section className="c-home-banner">
      <PageBoundary className="c-home-banner__boundary">

        {/* Featured Text */}
        <div className="c-home-banner__content">
          <Title large className="c-home-banner__content-title">
            Dominic Masters
          </Title>

          <Subtitle className="c-home-banner__content-subtitle">
            Developer, Nerd, Occasionally Funny
          </Subtitle>

          <p className="c-home-banner__content-paragraph">
            Welcome to my personal site. Learn about me, my current projects,
            see some demonstrations I've put together and feel free to get in
            touch.
          </p>

          <ButtonGroup>
            <Button to="/about" large>About</Button>
            <Button to="/contact" large>Contact</Button>
          </ButtonGroup>
        </div>

        {/* Featured Image */}
        <Link to="/about" className="c-home-banner__picture">
          <Image
            src={require('./../../../../assets/images/people/dominic/head.png')}
            className="c-home-banner__picture-image"
          />
        </Link>

      </PageBoundary>
    </Section>
  );
};
