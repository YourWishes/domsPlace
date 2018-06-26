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
    fakeURL = "https:" + fakeURL;
  }
  return (
    <ElementScrollFader from={props.from}>
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
        <SplitSection align="center">
          <Split padded>
            <ExistingWorkFrame
              title="KOPA Life"
              href="//www.kopalife.com/product/kube-customise"
              from="top"
              src={ require('./../../../images/work-showcase/kopalife.png') }
            />
          </Split>

          <Split padded>
            <ElementScrollFader from="bottom">
              <ContentBox box>
                <Heading1>{ Language.get("pages.about.work.kopa.heading") }</Heading1>
                { Language.get("pages.about.work.kopa.description") }
              </ContentBox>
            </ElementScrollFader>
          </Split>
        </SplitSection>


      </PageBoundary>
    </Section>
  );
}
