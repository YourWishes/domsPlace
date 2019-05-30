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
import { Image, ImageSource } from '@yourwishes/app-simple-react/dist/public';
import { PageBoundary } from './../../../../objects/page/boundary/';
import { Section } from './../../../../components/section/';
import { Heading2 } from './../../../../objects/typography/heading';

import './styles.scss';

export interface TechIconProps {
  src:ImageSource,
  title:string
}

export const TechIcon = (props:TechIconProps) => (
  <div className="c-tech-stack__platform-icon" title={props.title}>
    <div className="c-tech-stack__platform-icon-inner">
      <Image
        {...props}
        className="c-tech-stack__platform-icon-image"
        alt={props.title}
      />
    </div>
  </div>
);

export const TechStackSection = () => (
  <Section className="c-tech-stack">
    <PageBoundary size="small" className="c-tech-stack__boundary">
      <Heading2 className="c-tech-stack__title">
        Platforms I work with
      </Heading2>

      <div className="c-tech-stack__platform">
        {/* First Row */}
        <TechIcon title="C#" src={ require('./../../../../assets/images/branding/csharp/csharp-logo.svg')} />
        <TechIcon title="NodeJS" src={ require('./../../../../assets/images/branding/nodejs/nodejs-logo.svg')} />
        <TechIcon title="Java" src={ require('./../../../../assets/images/branding/java/java-logo.svg')} />
        <TechIcon title="PHP" src={ require('./../../../../assets/images/branding/php/php-logo.svg')} />
        <TechIcon title="C++" src={ require('./../../../../assets/images/branding/cpp/cpp-logo.svg')} />

        {/* Second Row */}
        <TechIcon title="TypeScript" src={ require('./../../../../assets/images/branding/typescript/typescript-logo.svg')} />
        <TechIcon title="React" src={ require('./../../../../assets/images/branding/react/react-logo.svg')} />
        <TechIcon title="Redux" src={ require('./../../../../assets/images/branding/redux/redux-logo.svg')} />
        <TechIcon title="webpack" src={ require('./../../../../assets/images/branding/webpack/webpack-logo.svg')} />
        <TechIcon title="jQuery" src={ require('./../../../../assets/images/branding/jquery/jquery-logo.svg')} />

        {/* Third Row */}
        <TechIcon title="Shopify" src={ require('./../../../../assets/images/branding/shopify/shopify-logo.svg')} />
        <TechIcon title="Heroku" src={ require('./../../../../assets/images/branding/heroku/heroku-logo.svg')} />
        <TechIcon title="Google Cloud Platform" src={ require('./../../../../assets/images/branding/google-cloud/google-cloud-logo.svg')} />
        <TechIcon title="Digital Ocean" src={ require('./../../../../assets/images/branding/digitalocean/digitalocean-logo.svg')} />
        <TechIcon title="neto" src={ require('./../../../../assets/images/branding/neto/neto-logo.svg')} />

        {/* Fourth Row */}
        <TechIcon title="MonoGame" src={ require('./../../../../assets/images/branding/monogame/monogame-logo.svg')} />
        <TechIcon title="OpenGL" src={ require('./../../../../assets/images/branding/opengl/opengl-logo.svg')} />
        <TechIcon title="Unity" src={ require('./../../../../assets/images/branding/unity/unity-logo.svg')} />
        <TechIcon title="LWJGL" src={ require('./../../../../assets/images/branding/lwjgl/lwjgl-logo.svg')} />
        {/* ??? */}


        {/* Fifth Row */}
        <TechIcon title="GraphQL" src={ require('./../../../../assets/images/branding/graphql/graphql-logo.svg')} />
        <TechIcon title="MySQL" src={ require('./../../../../assets/images/branding/mysql/mysql-logo.svg')} />
        <TechIcon title="PGSQL" src={ require('./../../../../assets/images/branding/pgsql/pgsql-logo.svg')} />
        {/* ??? */}
        {/* ??? */}

        {/* Sixth Row */}
        <TechIcon title="Discord" src={ require('./../../../../assets/images/branding/discord/discord-logo.svg')} />
        <TechIcon title="Twitch" src={ require('./../../../../assets/images/branding/twitch/twitch-logo.svg')} />
        <TechIcon title="Twitter" src={ require('./../../../../assets/images/branding/twitter/twitter-logo.svg')} />
        {/* ??? */}
        {/* ??? */}

      </div>
    </PageBoundary>
  </Section>
);
