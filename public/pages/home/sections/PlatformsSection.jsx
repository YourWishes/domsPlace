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

import { PageBoundary } from '@components/page/Page';
import Section from '@sections/Section';
import SplitSection, { Split } from '@sections/layout/SplitSection';

import FloatingContentBox from '@objects/content/box/FloatingContentBox';
import ContentBox from '@objects/content/box/ContentBox';
import Image from '@objects/image/Image';
import Video from '@objects/video/Video';
import { Title, Subtitle, Paragraph, Heading1 } from '@objects/typography/Typography';
import ElementScrollFader from '@objects/animation/fade/ElementScrollFader';

const Platform = props => {
  let { src, to, title } = props;
  let children;
  let image = <Image src={ src } loadable className="p-home-page__brands-image" width="96" height="96" maxWidth="250" />;

  if(props.to) {
    children = (
      <a href={ to } target="_blank" className="p-home-page__brands-link" title={ title }>
        { image }
      </a>
    );
  } else {
    children = image;
  }

  //Wrap in a div and a fader. Div is to help with random transitions on resizing.
  return <div className="p-home-page__brands-brand" children={children} />;
};

export default withLanguage(props => {
  let { lang } = props;
  return (
    <Section className="p-home-page__promo p-home-page__promo-platforms">
      <PageBoundary>
        <ElementScrollFader >
          <Title className="u-text-center p-home-page__brands-title">
            { lang.pages.home.platforms.heading }
          </Title>
        </ElementScrollFader>

        <ElementScrollFader from="bottom" className="p-home-page__brands">
          {/* Shopify */}
          <Platform
            src={require('@assets/images/branding/shopify/shopify_glyph.svg')}
            to="//www.shopify.com"
            title={ lang.pages.home.platforms.shopify }
          />
          {/* React */}
          <Platform
            src={require('@assets/images/branding/react/react-logo.svg')}
            to="//reactjs.org"
            title={ lang.pages.home.platforms.react }
          />

          {/* MonoGame */}
          <Platform
            src={require('@assets/images/branding/monogame/monogame-logo.svg')}
            to="http://www.monogame.net"
            title={ lang.pages.home.platforms.monogame }
          />

          {/* PGSQL */}
          <Platform
            src={require('@assets/images/branding/pgsql/pgsql-logo.svg')}
            to="//www.postgresql.org"
            title={ lang.pages.home.platforms.pgsql }
          />

          {/* NodeJS */}
          <Platform
            src={require('@assets/images/branding/nodejs/nodejs-logo.svg')}
            to="//nodejs.org"
            title={ lang.pages.home.platforms.nodejs }
          />

          {/* C# */}
          <Platform
            src={require('@assets/images/branding/csharp/csharp-logo.svg')}
            to="//docs.microsoft.com/en-us/dotnet/csharp/"
            title={ lang.pages.home.platforms.csharp }
          />

          {/* PHP */}
          <Platform
            src={require('@assets/images/branding/php/php-logo.svg')}
            to="//php.net"
            title={ lang.pages.home.platforms.php }
          />

          {/* Java */}
          <Platform
            src={require('@assets/images/branding/java/java-logo.svg')}
            to="//java.com"
            title={ lang.pages.home.platforms.java }
          />

          {/* neto */}
          <Platform
            src={require('@assets/images/branding/neto/neto-logo.svg')}
            to="//www.neto.com.au"
            title={ lang.pages.home.platforms.neto }
          />

          {/* MySQL */}
          <Platform
            src={require('@assets/images/branding/mysql/mysql-logo.svg')}
            to="//www.mysql.com"
            title={ lang.pages.home.platforms.mysql }
          />

          {/* Heroku */}
          <Platform
            src={require('@assets/images/branding/heroku/heroku-logo.svg')}
            to="//heroku.com"
            title={ lang.pages.home.platforms.heroku }
          />

          {/* OpenGL */}
          <Platform
            src={require('@assets/images/branding/opengl/opengl-logo.svg')}
            to="//www.opengl.org"
            title={ lang.pages.home.platforms.opengl }
          />

          {/* Discord */}
          <Platform
            src={ require('@assets/images/branding/discord/discord-logo.svg') }
            to="//discordapp.com"
            title={ lang.pages.home.platforms.discord }
          />

          {/* Twitch */}
          <Platform
            src={ require('@assets/images/branding/twitch/twitch-logo.svg') }
            to="//twitch.tv"
            title={ lang.pages.home.platforms.twitch }
          />

          {/* Twitter */}
          <Platform
            src={require('@assets/images/branding/twitter/twitter-logo.svg')}
            to="//twitter.com"
            title={ lang.pages.home.platforms.twitter }
          />

          {/* Google Cloud */}
          <Platform
            src={ require('@assets/images/branding/google-cloud/google-cloud-logo.svg') }
            to="//console.cloud.google.com"
            title={ lang.pages.home.platforms.googlecloud }
          />
        </ElementScrollFader>

        <ElementScrollFader from="top">
          <Subtitle className="u-text-center p-home-page__brands-title">
            { lang.pages.home.platforms.footer }
          </Subtitle>
        </ElementScrollFader>
      </PageBoundary>
    </Section>
  );
});
