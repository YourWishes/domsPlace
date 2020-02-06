import * as React from 'react';
import styled from 'styled-components';
import { Section } from '@components/layout/Section';
import { Frame } from '@components/layout/Frame';
import { ScrollFade } from '@components/effects/ScrollFade';
import { Boundary, BoundaryProps } from '@components/layout/Boundary';
import { MediaQueries } from '@settings/all';

const BannerImageWrapper = styled(Section)`
  position: relative;
  overflow: hidden;

  ${MediaQueries.mobileUp} {
    min-height: 25em;
  }

  ${MediaQueries.tabletUp} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${MediaQueries.laptopUp} {
    min-height: 35em;
  }
`;

const BannerImageMedia = styled(ScrollFade)`
  position: relative;
  width: 100%;

  ${MediaQueries.tabletUp} {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
  }
`;

const BannerImageContent = styled(ScrollFade)`
  position: relative;
  text-align: center;

  ${MediaQueries.tabletUp} {
    width: 80%;
    text-align: left;
  }

  ${MediaQueries.laptopUp} {
    width: 70%;
  }
`;

const BannerImageText = styled.div`
  ${MediaQueries.tabletUp} {
    width: ${90}%;
    transform: translateX(10%);
  }
`;

export type BannerImageSectionProps = BoundaryProps & {
  className?:string;
  title?:React.ComponentFactory<any, any>;
  subtitle?:React.ComponentFactory<any, any>;
  body?:React.ComponentFactory<any, any>;
};

export const BannerImageSection = (p:BannerImageSectionProps) => {
  const { title, subtitle, body, ...props } = p;

  return <Boundary as={BannerImageWrapper} {...props}>
    <BannerImageMedia from="bottom">
    </BannerImageMedia>

    <BannerImageContent from="left">
      <Frame padded>
        { title ? title() : null }
        { subtitle ? subtitle() : null }

        <BannerImageText>
          { body ? body() : null }
        </BannerImageText>
      </Frame>
    </BannerImageContent>
  </Boundary>
};