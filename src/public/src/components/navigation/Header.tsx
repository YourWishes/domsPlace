import * as React from 'react';
import styled from 'styled-components';
import { ZIndex, Gutters, MediaQueries, Colors } from '@settings/all';
import { Boundary } from '../layout/Boundary';
import { Logo } from '../../objects/branding/Logo';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: ${ZIndex.header};
  width: 100%;
  pointer-events: none;
  top: 0;
`;

const HeaderInner = styled(Boundary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Gutters.medium};
`;

const HeaderLogo = styled(Logo)`
  max-width: 150px;
  pointer-events: initial;
`

export const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <HeaderLogo />
    </HeaderInner>
  </HeaderWrapper>
)