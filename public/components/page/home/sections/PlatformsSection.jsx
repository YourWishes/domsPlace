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
import Language from './../../../language/Language';
import { PageBoundary } from './../../Page';
import { ImageSection, SplitSection, Split } from './../../../section/Section';
import FloatingContentBox from './../../../content/FloatingContentBox';
import ContentBox from './../../../content/ContentBox';
import Image from './../../../image/Image';
import Video from './../../../../video/Video';
import { Title, Subtitle, Paragraph, Heading1 } from './../../../../objects/typography/Typography';
import ElementScrollFader from './../../../animation/fade/ElementScrollFader';

const Platform = (props) => {
  let children;
  let image = <Image src={props.src} loadable className="p-home-page__brands-image" width="96" height="96" />;

  if(props.to) {
    children = (
      <a href={props.to} target="_blank" className="p-home-page__brands-link" title={props.title}>
        {image}
      </a>
    );
  } else {
    children = image;
  }

  //Wrap in a div and a fader. Div is to help with random transitions on resizing.
  return (
    <div className="p-home-page__brands-brand">
      <ElementScrollFader from={props.from}>
        {children}
      </ElementScrollFader>
    </div>
  );
};

export default (props) => {
  return (
    <ImageSection
      className="p-home-page__promo p-home-page__promo-platforms"
      src={ require('./../../../images/patterns/game-show.svg') }
      loadable
      background
    >
      <PageBoundary>
        <ElementScrollFader from="left">
          <Title className="u-text-center p-home-page__brands-title">
            { Language.get("pages.home.platforms.heading") }
          </Title>
        </ElementScrollFader>

        <div className="p-home-page__brands">
          {/* Shopify */}
          <Platform
            src={require('./../../../images/branding/shopify/shopify_glyph.svg')}
            from="left"
            to="//www.shopify.com"
            title={ Language.get("pages.home.platforms.shopify") }
          />
          {/* React */}
          <Platform
            src={require('./../../../images/branding/react/react-logo.svg')}
            from="top"
            to="//reactjs.org"
            title={ Language.get("pages.home.platforms.react") }
          />

          {/* MonoGame */}
          <Platform
            src={require('./../../../images/branding/monogame/monogame-logo.svg')}
            from="bottom"
            to="http://www.monogame.net"
            title={ Language.get("pages.home.platforms.monogame") }
          />

          {/* PGSQL */}
          <Platform
            src={require('./../../../images/branding/pgsql/pgsql-logo.svg')}
            from="right"
            to="//www.postgresql.org"
            title={ Language.get("pages.home.platforms.pgsql") }
          />

          {/* NodeJS */}
          <Platform
            src={require('./../../../images/branding/nodejs/nodejs-logo.svg')}
            from="top"
            to="//nodejs.org"
            title={ Language.get("pages.home.platforms.nodejs") }
          />

          {/* C# */}
          <Platform
            src={require('./../../../images/branding/csharp/csharp-logo.svg')}
            from="top"
            to="//docs.microsoft.com/en-us/dotnet/csharp/"
            title={ Language.get("pages.home.platforms.csharp") }
          />

          {/* PHP */}
          <Platform
            src={require('./../../../images/branding/php/php-logo.svg')}
            from="top"
            to="//php.net"
            title={ Language.get("pages.home.platforms.php") }
          />

          {/* Java */}
          <Platform
            src={require('./../../../images/branding/java/java-logo.svg')}
            from="top"
            to="//java.com"
            title={ Language.get("pages.home.platforms.java") }
          />

          {/* neto */}
          <Platform
            src={require('./../../../images/branding/neto/neto-logo.svg')}
            from="bottom"
            to="//www.neto.com.au"
            title={ Language.get("pages.home.platforms.neto") }
          />

          {/* MySQL */}
          <Platform
            src={require('./../../../images/branding/mysql/mysql-logo.svg')}
            from="bottom"
            to="//www.mysql.com"
            title={ Language.get("pages.home.platforms.mysql") }
          />

          {/* Heroku */}
          <Platform
            src={require('./../../../images/branding/heroku/heroku-logo.svg')}
            from="bottom"
            to="//heroku.com"
            title={ Language.get("pages.home.platforms.heroku") }
          />

          {/* OpenGL */}
          <Platform
            src={require('./../../../images/branding/opengl/opengl-logo.svg')}
            from="bottom"
            to="//www.opengl.org"
            title={ Language.get("pages.home.platforms.opengl") }
          />

          {/* Discord */}
          <Platform
            src={ require('./../../../images/branding/discord/discord-logo.svg') }
            from="right"
            to="//discordapp.com"
            title={ Language.get("pages.home.platforms.discord") }
          />

          {/* Twitch */}
          <Platform
            src={ require('./../../../images/branding/twitch/twitch-logo.svg') }
            from="right"
            to="//twitch.tv"
            title={ Language.get("pages.home.platforms.twitch") }
          />

          {/* Twitter */}
          <Platform
            src={require('./../../../images/branding/twitter/twitter-logo.svg')}
            from="left"
            to="//twitter.com"
            title={ Language.get("pages.home.platforms.twitter") }
          />

          {/* Google Cloud */}
          <Platform
            src={ require('./../../../images/branding/google-cloud/google-cloud-logo.svg') }
            from="left"
            to="//console.cloud.google.com"
            title={ Language.get("pages.home.platforms.googlecloud") }
          />
        </div>

        <ElementScrollFader from="bottom">
          <Subtitle className="u-text-center p-home-page__brands-title">
            { Language.get("pages.home.platforms.footer") }
          </Subtitle>
        </ElementScrollFader>
      </PageBoundary>
    </ImageSection>
  );
}
