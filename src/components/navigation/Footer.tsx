import * as React from 'react';
import styled from 'styled-components';
import { Boundary } from '../layout/Boundary';
import { Logo } from '../../objects/branding/Logo';
import { Frame } from '../layout/Frame';
import { Gutters, Colors, MediaQueries, Borders } from '@settings/all';
import { Link } from 'gatsby';

const FooterInner = styled(Boundary)`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: ${Gutters.large};
  margin-top: ${Gutters.extremeLarge};

  ${MediaQueries.tabletUp} {
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const FooterLogo = styled(Logo)`
  max-width: 200px;
  margin: ${Gutters.medium} 0;
`

const FooterUpper = styled(Frame)`
  min-height: 5rem;
  margin-top: ${Gutters.large};
`;

const FooterCopyright = styled.div`
  margin: 0;
  width: 100%;
  background: ${Colors.primary};
  text-align: center;
  font-size: 0.9em;
  padding: ${Gutters.medium};

  ${MediaQueries.tabletUp} {
    text-align: right;
  }
`

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${Gutters.medium};
  width: 100%;

  ${MediaQueries.mobileUp} {
    justify-content: flex-start;
  }

  ${MediaQueries.tabletUp} {
    max-width: 75%;
  }
`;

const FooterLink = styled(Link)`
  color: inherit;
  text-align: center;
  padding: ${Gutters.small} ${Gutters.extraSmall};
  width: calc(50% - ${Gutters.extraSmall});

  &:hover { text-decoration: underline; }

  ${MediaQueries.mobileUp} {
    width: 25%;
    text-align:  left;
  }
`;

const FooterLine = styled.div`
  width: 100%;
`;

export const Footer = () => (
  <footer>
    <FooterUpper padded>
      <FooterInner size="large">
        <FooterLogo />

        <FooterLine />

        <FooterNav>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/legal/privacy">Privacy Policy</FooterLink>
        </FooterNav>
      </FooterInner>
    </FooterUpper>

    <FooterCopyright>
      <Boundary size="large">
        &copy; 2012 ~ {new Date().getFullYear()} - Dominic Masters
      </Boundary>
    </FooterCopyright>
  </footer>
);