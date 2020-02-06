import * as React from 'react';
import { ScrollFade, ScrollFadeProps } from '@components/effects/ScrollFade';
import { Section } from '@components/layout/Section';
import { Frame } from '@components/layout/Frame';
import styled from 'styled-components';
import { Boundary, BoundaryProps } from '@components/layout/Boundary';
import { MediaQueries, Durations, Easings } from '@settings/all';
import Img, { GatsbyImageProps, FluidObject } from 'gatsby-image';

const MosaicWrapper = styled(Section)`
  ${MediaQueries.tabletUp} {
    display: flex;
    align-items: center;
  }
`;

const MosaicGrid = styled.div`
  position: relative;
  width: 100%;

  ${MediaQueries.tabletUp} {
    width: 50%; 
    order: 2;
  }
`;

const MosaicPad = styled.div`
  width: 100%;
  padding-bottom: 80%;
`;

const MosaicContent = styled(ScrollFade)`
  text-align: center;
  ${MediaQueries.tabletUp} {
    width: 50%;
    text-align: left;
  }
`;

const MosaicBody = styled.div`
  ${MediaQueries.tabletUp} {
    width: 90%;
    transform: translateX(10%);
  }
`;

export type MosaicTileProps = ScrollFadeProps & {
  index?:number;
  image:GatsbyImageProps;
  to:string;
  className?:string;
}

const MosaicTileImage = styled((props:GatsbyImageProps) => <Img {...props} />)`
  width: 100%;
  display: block;
`

const MosaicTile = styled( ({ image, to, ...props }:MosaicTileProps) => {
  return <ScrollFade {...props}>
    <Frame>
      <a href={to}><MosaicTileImage {...image } /></a>
    </Frame>
  </ScrollFade>;
})(props => `
  position: absolute;
  transition: all ${Durations.timeShort}s ${Easings.easeOut};
  
  ${props.index == 0 ? `
    bottom: 10%;
    left: 15%;
    width: 50%;
    z-index: 3;
    
    &:hover { transform: translateY(-0.5em); }
  ` : props.index == 1 ? `
    bottom: 20%;
    left: 25%;
    width: 45%;

    &:hover { transform: translateX(-0.5em); }
  ` : props.index == 2 ? `
    width: 50%;
    right: 5%;
    top: 25%;

    &:hover { transform: translate(0.5em, -0.5em); }
  ` : ''}
`);

export type MosaicProps = BoundaryProps & {
  title:React.ComponentFactory<any, any>;
  body?:React.ComponentFactory<any, any>;
  images?:MosaicTileProps[];
}

export const Mosaic = styled((p:MosaicProps) => {
  let { title, body, images, ...props } = p;
  return <Boundary as={MosaicWrapper} {...props}>
    <MosaicGrid>
      { images ? images.map((c,i) => <MosaicTile index={i} key={i} {...c} />) : null }
      <MosaicPad />
    </MosaicGrid>

    <MosaicContent from="left">
      <Frame padded>
        <div>{title ? title() : null}</div>
        <MosaicBody>{body ? body() : null}</MosaicBody>
      </Frame>
    </MosaicContent>
  </Boundary>;
})`
  ${MediaQueries.tabletUp} {
    display: flex;
    align-items: center;
  }
`;