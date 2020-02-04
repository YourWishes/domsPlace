import * as React from 'react';
import styled, { css } from 'styled-components';
import { FontSizes, Fonts, FontWeights, MediaQueries } from '@settings/all';
import { Heading2, Heading1 } from './Heading';

export const Subtitle = styled(Heading2)`
`;

export const Title = styled(Heading1)((props:{large?:boolean}) => `
  font-size: ${FontSizes.title};
  margin: 0.4em 0 0.5em;

  + ${Subtitle} {
    margin-top: -1em;
    margin-bottom: 1em;
  }

  ${props.large ? `
    ${MediaQueries.tabletUp} {
      font-size: ${FontSizes.titleLarge};
    }
  `:''}
`);