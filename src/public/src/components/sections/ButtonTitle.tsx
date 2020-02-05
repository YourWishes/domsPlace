import * as React from 'react';
import { Boundary, BoundaryProps } from '@components/layout/Boundary';
import { Section } from '@components/layout/Section';
import styled from 'styled-components';
import { ScrollFade } from '@components/effects/ScrollFade';
import { Frame } from '@components/layout/Frame';
import { Gutters } from '@settings/all';

const ButtonTitleInner = styled(ScrollFade)`
  width: 100%;
`;

const ButtonTitleContent = styled(Frame)`
  text-align: center;
`;

export type ButtonTitleProps = BoundaryProps & {
  title?:React.ComponentFactory<any,any>;
  body?:React.ComponentFactory<any,any>;
  buttons?:React.ComponentFactory<any,any>;
}

export const ButtonTitle = ({ title, body, buttons, ...props }:ButtonTitleProps) => (
  <Boundary as={Section} {...props}>
    <ButtonTitleInner from="bottom" delay="short">
      <ButtonTitleContent padded>
        { title ? title() : null }
        { body ? body() : null }

        { buttons ? buttons() : buttons }
      </ButtonTitleContent>
    </ButtonTitleInner>
  </Boundary>
);