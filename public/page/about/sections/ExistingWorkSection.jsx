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
import Section, { SplitSection, Split, ClearSection } from './../../../section/Section';
import ContentBox from './../../../content/ContentBox';
import { Title, Subtitle, Paragraph, Heading1 } from './../../../typography/Typography';
import ElementScrollFader from './../../../animation/fade/ElementScrollFader';
import Image from './../../../image/Image';

import Window95, {
  TitleBar, Close, Minimize,
  MenuBar, MenuOption,
  ContextMenu, ContextMenuOption,
  Frame,
  AddressBar
} from './../../../window/Window95';

const ExistingWorkFrame = (props) => {
  let fakeURL = props.href;
  if(!fakeURL.startsWith("http")) {
    fakeURL = window.location.protocol + fakeURL;
  }
  return (
    <SplitSection align="center">
      <Split padded>
        <ElementScrollFader from={props.fromLeft}>
          <Window95>
            <TitleBar buttons={[
              <Minimize key="Minimize" disabled />,
              <Close key="close" disabled />
            ]}>
              { props.title }
            </TitleBar>

            <MenuBar>
              <MenuOption title="File" disabled />
              <MenuOption title="Visit Page" href={ props.href } target="_blank" />
            </MenuBar>

            <AddressBar href={fakeURL} />
            <Frame>
              <a href={ props.href} target="_blank" className="p-about-page__work-link">
                <Image
                  src={props.src}
                  alt={props.title}
                  className="p-about-page__work-link-image"
                />
              </a>
            </Frame>
          </Window95>
        </ElementScrollFader>
      </Split>

      <Split padded>
        <ElementScrollFader from={ props.fromRight }>
          <ContentBox box>
            <Heading1>{ props.title }</Heading1>
            { props.description }
          </ContentBox>
        </ElementScrollFader>
      </Split>
    </SplitSection>
  );
};



export default (props) => {
  return (
    <Section className="p-about-page__promo p-about-page__promo-work">
      {/* Title */}
      <PageBoundary small>
        <ElementScrollFader from="left">
          <ContentBox box>
            <Title className="u-text-center">
              { Language.get("pages.about.work.heading") }
            </Title>
            <Paragraph>
              { Language.get("pages.about.work.paragraph") }
            </Paragraph>
          </ContentBox>
        </ElementScrollFader>

        <ClearSection />{/* Space a bit */}
      </PageBoundary>

      <PageBoundary>
        {/* KOPA */}
        <ExistingWorkFrame
          href="//www.kopalife.com/product/kube-customise"
          fromLeft="top"
          fromRight="bottom"
          src={ require('./../../../images/work-showcase/kopalife.png') }
          title={ Language.get("pages.about.work.kopa.heading") }
          description={ Language.get("pages.about.work.kopa.description") }
        />
      </PageBoundary>
    </Section>
  );
}
