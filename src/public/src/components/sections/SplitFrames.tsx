import * as React from 'react';
import styled from 'styled-components';
import { Section } from '@components/layout/Section';
import { MediaQueries, Gutters } from '@settings/all';
import { BoundaryProps, Boundary } from '@components/layout/Boundary';
import { ScrollFade, ScrollFadeProps } from '@components/effects/ScrollFade';
import { Frame } from '@components/layout/Frame';

const SplitFramesContainer = styled(Section)`
  ${MediaQueries.tabletUp} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  ${MediaQueries.laptopUp} {
    justify-content: space-between;
  }
`;

const SplitFramesHeader = styled(ScrollFade)`
  width: 100%;
  text-align: center;

  ${MediaQueries.tabletUp} {
    margin-bottom: ${Gutters.large};
  }
`;

type SplitProps = ScrollFadeProps & { padded?:boolean };
const Split = styled((props:SplitProps) => (
  <ScrollFade {...props}>
    <Frame padded={props.padded}>
      { props.children }
    </Frame>
  </ScrollFade>
))`
  width: 100%;
  text-align: center;

  ${MediaQueries.tabletUp} {
    width: 50%;
    margin: 0;
    text-align: left;
  }

  ${MediaQueries.laptopUp} {
    width: calc(50% - (${Gutters.medium}/2));
  }

  ${MediaQueries.desktopUp} {
    width: calc(50% - (${Gutters.large}/2));
  }
`;

const RightSplit = Split;
const LeftSplit = styled(Split)`
  width: 100%;
  margin-bototm: ${Gutters.extraLarge};
`;



export type SplitFramesProps = BoundaryProps & {
  title?:React.ComponentFactory<any, any>;
  subtitle?:React.ComponentFactory<any,any>;
  leftOptions?:SplitProps;
  rightOptions?:SplitProps;
  left:React.ComponentFactory<any,any>;
  right:React.ComponentFactory<any,any>;
};

export const SplitFrames = (props:SplitFramesProps) => {
  let header;

  if(props.title || props.subtitle) {
    header = <SplitFramesHeader from="top">
      <Frame padded>
        { props.title ? props.title() : null }
        { props.subtitle ? props.subtitle() : null }
      </Frame>
    </SplitFramesHeader>
  }

  return (
    <Boundary {...props} as={SplitFramesContainer}>
      { header }

      <LeftSplit {...(props.leftOptions||{})}>
        {props.left()}
      </LeftSplit>

      <RightSplit {...(props.rightOptions||{})}>
        {props.right()}
      </RightSplit>
    </Boundary>
  );
};