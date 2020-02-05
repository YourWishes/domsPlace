import * as React from 'react';
import styled from 'styled-components';
import { Boundary, BoundaryProps } from '@components/layout/Boundary';
import { Section } from '@components/layout/Section';
import { MediaQueries, Easings, Durations } from '@settings/all';
import { ScrollFade, ScrollFadeProps } from '@components/effects/ScrollFade';
import { Frame } from '@components/layout/Frame';
import Img, { GatsbyImageProps } from 'gatsby-image';

const StackedMosaicWrapper = styled((props:BoundaryProps) => <Boundary as={Section} {...props} />)`
  ${MediaQueries.tabletUp} {
    display: flex;
    align-items: center;
  }
`;

const StackedMosaicGrid = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 72%;

  ${MediaQueries.tabletUp} {
    width: 50%;
    padding-bottom: 33%;
  }
`;

const StackedMosaicContent = styled(ScrollFade)`
  text-align: center;
  ${MediaQueries.tabletUp} {
    width: 50%;
    text-align: left;
  }
`;

const StackedMosaicHeader = styled(Frame)`
  ${MediaQueries.desktopUp} {
    position: relative;
    transform: translateX(-2em);
  }
`

const StackedMosaicBody = styled(Frame)`
  ${MediaQueries.desktopUp} {
    position: relative;
    transform: translateX(3em);
  }
`;

type StackedMosaicTileProps = ScrollFadeProps & {
  index?:number;
  to:string;
  image:GatsbyImageProps;
}

const StackedMosaicTile = styled( ({ to, image, ...props}:StackedMosaicTileProps) => (
  <ScrollFade {...props}>
    <a href={to}><Img {...image} /></a>
  </ScrollFade>
))(props => `
  position: absolute;
  width: 50%;
  margin: 0;
  transition: all ${Durations.timeShort}s ${Easings.easeOut};
  transform: translateY(0em) rotate(-25deg);

  ${props.index ? `
    left: ${(10 * props.index) + 2.5}%;
    top: ${14 + (props.index * 2)}%;
  ` : ``}

  &:hover {
    transform: translateY(-0.5em) rotate(-25deg);
  }
`);

export type StackedMosaicProps = BoundaryProps & {
  images:StackedMosaicTileProps[];
  title:React.ComponentFactory<any,any>;
  body:React.ComponentFactory<any,any>;
}

export const StackedMosaic = ({ title, body, images, ...p }:StackedMosaicProps) => (
  <StackedMosaicWrapper {...p}>
    <StackedMosaicGrid>
      {images.map((e,i) => <StackedMosaicTile key={i} {...e} index={i+1} />)}
    </StackedMosaicGrid>
    
    
    <StackedMosaicContent from="left">  
      <StackedMosaicHeader padded>
        { title ? title() : null }
      </StackedMosaicHeader>
      <StackedMosaicBody padded>
        { body ? body() : null }
      </StackedMosaicBody>
    </StackedMosaicContent>
  </StackedMosaicWrapper>
);