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
import { connect } from 'react-redux';
import Language from './../../language/Language';
import { Link } from 'react-router-dom';
import Page, { PageBoundary } from './../Page';
import Section, { ImageSection, VideoSection, SplitSection, Split } from './../../section/Section';
import FloatingContentBox from './../../content/FloatingContentBox';
import ContentBox from './../../content/ContentBox';
import Image from './../../image/Image';
import Video from './../../video/Video';
import { Title, Subtitle, Paragraph, Heading1 } from './../../typography/Typography';
import ElementScrollFader from './../../animation/fade/ElementScrollFader';

const AboutPageBrand = (props) => {
  let children;
  let image = <Image src={props.src} className="p-about-page__brands-image" />;

  if(props.to) {
    children = (
      <a href={props.to} target="_blank" className="p-about-page__brands-link">
        {image}
      </a>
    );
  } else {
    children = image;
  }

  return (
    <ElementScrollFader from={props.from} className="p-about-page__brands-brand">
      {children}
    </ElementScrollFader>
  );
};

const AboutPage = (props) => {
  //Return
  return (
    <Page style="home-page" className="p-about-page">

      { /* Banner */ }
      <ImageSection
        src={ require('./../../images/banners/about/glasses.svg') }
        alt="domsPlace"
      >
        <PageBoundary full>
          <FloatingContentBox position="middle center" size="large" className="u-text-center">
            <Title>{ Language.get("pages.about.banner.title") }</Title>
            <Subtitle className="u-responsive--small-up">{ Language.get("pages.about.banner.subtitle") }</Subtitle>
          </FloatingContentBox>
        </PageBoundary>
      </ImageSection>

      { /* Promo Video */ }
      <Section className="p-about-page__promo p-about-page__promo-video">
        <PageBoundary>
          <SplitSection align="center">

            <Split className="u-text-center" padded>
              <ElementScrollFader>
                <Video
                  image={ require('./../../videos/bunny/big_buck_bunny.jpg') }
                  mp4={ require('./../../videos/bunny/big_buck_bunny.mp4') }
                  controls
                />
              </ElementScrollFader>
            </Split>

            <Split className="u-text-center" padded>
              <ElementScrollFader from="bottom">
                <ContentBox box>
                  <Title>
                    { Language.get("pages.about.video.heading") }
                  </Title>
                  <Paragraph>
                    { Language.get("pages.about.video.paragraph") }
                  </Paragraph>
                </ContentBox>
              </ElementScrollFader>
            </Split>

          </SplitSection>
        </PageBoundary>
      </Section>

      {/* Programming */}
      <Section className="p-about-page__promo p-about-page__promo-programming">
        <PageBoundary small>
          <ElementScrollFader from="bottom">
            <ContentBox box>
              <Title className="u-text-center">
                { Language.get("pages.about.programming.heading") }
              </Title>
              <Paragraph>
                { Language.get("pages.about.programming.paragraph") }
              </Paragraph>
            </ContentBox>
          </ElementScrollFader>
        </PageBoundary>
      </Section>

      {/* Platforms */}
      <Section className="p-about-page__promo p-about-page__promo-platforms">
        <PageBoundary>
          <Title className="u-text-center p-about-page__brands-title">
            { Language.get("pages.about.platforms.heading") }
          </Title>

          <div className="p-about-page__brands">
            {/* Shopify */}
            <AboutPageBrand
              src={require('./../../images/branding/shopify/shopify_glyph.svg')}
              from="left"
              to="//www.shopify.com"
            />
            {/* React */}
            <AboutPageBrand
              src={require('./../../images/branding/react/react-logo.svg')}
              from="top"
              to="//reactjs.org"
            />

            {/* MonoGame */}
            <AboutPageBrand
              src={require('./../../images/branding/monogame/monogame-logo.svg')}
              from="left"
              to="http://www.monogame.net"
            />

            {/* PGSQL */}
            <AboutPageBrand
              src={require('./../../images/branding/pgsql/pgsql-logo.svg')}
              from="left"
              to="//www.postgresql.org"
            />

            {/* NodeJS */}
            <AboutPageBrand
              src={require('./../../images/branding/nodejs/nodejs-logo.svg')}
              from="bottom"
              to="//nodejs.org"
            />

            {/* C# */}
            <AboutPageBrand
              src={require('./../../images/branding/csharp/csharp-logo.svg')}
              from="left"
              to="//docs.microsoft.com/en-us/dotnet/csharp/"
            />

            {/* PHP */}
            <AboutPageBrand
              src={require('./../../images/branding/php/php-logo.svg')}
              from="left"
              to="//php.net"
            />

            {/* Java */}
            <AboutPageBrand
              src={require('./../../images/branding/java/java-logo.svg')}
              from="left"
              to="//java.com"
            />

            {/* neto */}
            <AboutPageBrand
              src={require('./../../images/branding/neto/neto-logo.svg')}
              from="left"
              to="http://www.monogame.net"
            />

            {/* MySQL */}
            <AboutPageBrand
              src={require('./../../images/branding/mysql/mysql-logo.svg')}
              from="left"
              to="//www.mysql.com"
            />

            {/* Heroku */}
            <AboutPageBrand
              src={require('./../../images/branding/heroku/heroku-logo.svg')}
              from="left"
              to="//heroku.com"
            />

            {/* OpenGL */}
            <AboutPageBrand
              src={require('./../../images/branding/opengl/opengl-logo.svg')}
              from="bottom"
              to="//www.opengl.org"
            />

            {/* Discord */}
            <AboutPageBrand
              src={ require('./../../images/branding/discord/discord-logo.svg') }
              from="left"
              to="//discordapp.com"
            />

            {/* Twitch */}
            <AboutPageBrand
              src={ require('./../../images/branding/twitch/twitch-logo.svg') }
              from="left"
              to="//twitch.tv"
            />

            {/* Twitter */}
            <AboutPageBrand
              src={require('./../../images/branding/twitter/twitter-logo.svg')}
              from="left"
              to="//twitter.com"
            />

            {/* Google Cloud */}
            <AboutPageBrand
              src={
                require('./../../images/branding/google-cloud/google-cloud-logo.svg')
              }
              from="left"
              to="//console.cloud.google.com"
            />
          </div>

          <Subtitle className="u-text-center p-about-page__brands-title">
            { Language.get("pages.about.platforms.footer") }
          </Subtitle>
        </PageBoundary>
      </Section>

      {/* Systems Admin */}
      <Section className="p-about-page__promo p-about-page__promo-admin">
        <PageBoundary>
          <SplitSection align="center">
            <Split className="u-text-center" padded>
              <ElementScrollFader from="left">
                <Video
                  image={ require('./../../videos/bunny/big_buck_bunny.jpg') }
                  mp4={ require('./../../videos/bunny/big_buck_bunny.mp4') }
                  controls
                />
              </ElementScrollFader>
            </Split>

            <Split padded>
              <ElementScrollFader from="right">
                <ContentBox box>
                  <Title>
                    { Language.get("pages.about.admin.heading") }
                  </Title>
                  { Language.get("pages.about.admin.paragraph") }
                </ContentBox>
              </ElementScrollFader>
            </Split>
          </SplitSection>
        </PageBoundary>
      </Section>

      {/* Media */}
      <Section className="p-about-page__promo p-about-page__promo-media">
        <PageBoundary>
          <SplitSection align="center">

            <Split padded>
              <ElementScrollFader from="bottom">

              </ElementScrollFader>
            </Split>

          </SplitSection>
        </PageBoundary>
      </Section>
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {
    code: state.language.code
  };
}

export default connect(mapStateToProps)(AboutPage);
