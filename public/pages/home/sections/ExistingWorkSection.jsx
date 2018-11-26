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
import ClearSection from '@sections/layout/ClearSection';

import ContentBox from '@objects/content/box/ContentBox';
import { Title, Subtitle, Paragraph, Heading1, Heading2 } from '@objects/typography/Typography';
import { Button } from '@objects/input/Input';
import ElementScrollFader from '@objects/animation/fade/ElementScrollFader';
import Image from '@objects/image/Image';

import Window95, {
  TitleBar, Close, Minimize,
  MenuBar, MenuOption,
  ContextMenu, ContextMenuOption,
  Frame,
  AddressBar
} from '@objects/window/Window95';

const ExistingWorkFrame = (props) => {
  let {
    fakeURL, href, title, src, fromRight, fromLeft, description, swap,
  } = props;

  fakeURL = fakeURL || href;

  if(!fakeURL.startsWith("http")) fakeURL = window.location.protocol+fakeURL;

  let fakeWindow = (
    <ElementScrollFader from={swap?fromRight:fromLeft}>
      <Window95>
        <TitleBar buttons={[
          <Minimize key="Minimize" disabled />,
          <Close key="close" disabled />
        ]}>
          { title }
        </TitleBar>

        <MenuBar>
          <MenuOption title="File" disabled />
          <MenuOption title="Visit Page" href={ href } target="_blank" />
        </MenuBar>

        <AddressBar href={fakeURL} />
        <Frame>
          <a href={ href} target="_blank" className="p-home-page__work-link">
            <Image
              src={ src }
              alt={ title }
              loadable
              className="p-home-page__work-link-image"
              maxWidth="600"
            />
          </a>
        </Frame>
      </Window95>
    </ElementScrollFader>
  );

  let box = (
    <ElementScrollFader from={swap?fromLeft:fromRight }>
      <ContentBox box>
        <Heading2>{ title }</Heading2>
        { description }
      </ContentBox>
    </ElementScrollFader>
  );

  let left, right;
  if(props.swap) {
    left = box;
    right = fakeWindow;
  } else {
    left = fakeWindow;
    right = box;
  }

  return (
    <SplitSection align="center">
      <Split padded children={left} />
      <Split padded children={ right } />
    </SplitSection>
  );
};



export default withLanguage(props => {
  let { lang } = props;

  return (
    <Section className="p-home-page__promo p-home-page__promo-work">
      {/* Title */}
      <PageBoundary small>
        <ElementScrollFader from="left">
          <ContentBox box>
            <Heading1 className="u-text-center">
              { lang.pages.home.work.heading }
            </Heading1>
            <Paragraph>
              { lang.pages.home.work.paragraph }
            </Paragraph>
          </ContentBox>
        </ElementScrollFader>

        <ClearSection />{/* Space a bit */}
      </PageBoundary>

      <PageBoundary>
        {/* KOPA */}
        <ExistingWorkFrame
          href="//www.kopalife.com/products/kube-customise"
          fromLeft="top"
          fromRight="bottom"
          src={ require('@assets/images/work-showcase/kopalife.png') }
          title={ lang.pages.home.work.kopa.heading }
          description={ lang.pages.home.work.kopa.description }
        />

        {/* SMAI */}
        <ExistingWorkFrame
          href="//www.smai.com.au/"
          fromLeft="right"
          fromRight="right"
          swap
          src={ require('@assets/images/work-showcase/smai.svg') }
          title={ lang.pages.home.work.smai.heading }
          description={ lang.pages.home.work.smai.description }
        />

        {/* Cocksox */}
        <ExistingWorkFrame
          href="//www.cocksox.com/"
          fromLeft="bottom"
          fromRight="top"
          src={ require('@assets/images/work-showcase/cocksox.png') }
          title={ lang.pages.home.work.cocksox.heading }
          description={ lang.pages.home.work.cocksox.description }
        />

        {/* Oz Hair and Beauty */}
        <ExistingWorkFrame
          href="//www.ozhairandbeauty.com/"
          fromLeft="left"
          fromRight="left"
          swap
          src={ require('@assets/images/work-showcase/ozhair.png') }
          title={ lang.pages.home.work.ozhair.heading }
          description={ lang.pages.home.work.ozhair.description }
        />
      </PageBoundary>

      <PageBoundary small>
        <ClearSection />{/* Space a bit */}

        <ElementScrollFader from="bottom">
          <ContentBox box className="u-text-center">
            <Subtitle>{ lang.pages.home.work.footer }</Subtitle>
            <Button size="large" to="/contact">
              { lang.pages.home.work.footerButton }
            </Button>
          </ContentBox>
        </ElementScrollFader>

        <ClearSection />{/* Space a bit */}
      </PageBoundary>
    </Section>
  );
});
