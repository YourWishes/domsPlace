import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from '@settings/all';

export type BoundarySize = 'small' | 'medium' | 'large';

export interface BoundaryProps {
  size?:BoundarySize;
}

export const Boundary = styled.div<BoundaryProps>(props => `
  margin-left: auto;
  margin-right: auto;

  max-width: ${
    props.size === 'large' ? Sizes.laptopLarge :
    props.size === 'small' ? Sizes.mobileLarge :
    Sizes.tabletLarge
  }px;
`);