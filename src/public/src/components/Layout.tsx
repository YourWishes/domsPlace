import * as React from 'react';
import { Header } from '@components/navigation/Header';
import { Background } from './layout/Background';
import { Footer } from './navigation/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, Fonts, FontWeights, FontSizes, Gutters } from '@settings/all';
import { graphql } from 'gatsby';
import { BodyStyles, AllElementStyles } from '@styles';
import { AnchorStyles } from '@styles/anchor';

const GlobalStyles = createGlobalStyle`
  ${AllElementStyles}
  ${BodyStyles}
  ${AnchorStyles}
`;

const LayoutMain = styled.main`
  margin-top: ${Gutters.extraExtraLarge};
`;

export const Layout = (props:{children:React.ReactNode}) => (
  <div {...props}>
    <GlobalStyles />
    <Background />
    <Header />
    <LayoutMain>
      { props.children }
    </LayoutMain>
    <Footer />
  </div>
);