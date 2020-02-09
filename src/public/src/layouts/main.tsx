import * as React from 'react';
import { Header } from '@components/navigation/Header';
import { Background } from '../components/layout/Background';
import { Footer } from '../components/navigation/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { Gutters, Easings, Durations } from '@settings/all';
import { BodyStyles, AllElementStyles, AnchorStyles } from '@styles/index';
import { TransitionGroup, Transition } from "react-transition-group"
import { TransitionStatus } from 'react-transition-group/Transition';

//Load Global Styles
const GlobalStyles = createGlobalStyle`
  ${AllElementStyles}
  ${BodyStyles}
  ${AnchorStyles}
`;

//Transition
const Timeouts = { enter: Durations.timeMedium * 1000, exit: Durations.timeMedium * 1000 };
const LayoutTransition = styled.div(({ status }:{ status:TransitionStatus }) => {
  return `
    transition: transform ${Timeouts.enter}ms ${Easings.easeOut};
    ${ status == 'entering' ? `
      position: absolute;
      opacity: 0;
      transform: translateY(-${Gutters.extraExtraLarge});
    `: status == 'entered' ? `
      opacity: 1;
      transform: translateY(0em);
    `: status == 'exiting' ? `
      opacity: 0;
      transform: translateY(${Gutters.extraExtraLarge});
    `:''}
  `;
});


//Main area
const LayoutMain = styled.main`
  margin-top: ${Gutters.extraExtraLarge};
`;

export interface LayoutProps {
  children:React.ReactNode;
  location:any;
};
export const Layout = ({ location, children, ...props }:LayoutProps) => (
  <div {...props}>
    <GlobalStyles />
    <Background />
    <Header />
    <LayoutMain>
      <TransitionGroup>
        <Transition key={location.pathname} timeout={Timeouts}>
          {status => <LayoutTransition status={status}>
            { children }
          </LayoutTransition>}
        </Transition>
      </TransitionGroup>
    </LayoutMain>
    <Footer />
  </div>
);

export default Layout;