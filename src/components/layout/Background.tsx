import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Easings, Durations } from '@settings/all';

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
`;

const BackgroundImage = styled.svg`
  display: block;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const BackgroundGradient = styled.stop<{color:string}>(props => `
  stop-color:${props.color};
  stop-opacity:1;
`);

const BackgroundFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12%);
  }

  to {
    opacity: 0.4;
    transform: translateY(0%);
  }
`;

const BackgroundCircle = styled( (props:{
  layer:number, fill:string, className?:string
}) => <circle {...props}
  cx="960" cy={5540 + (props.layer * 60)}
  r={4700 + (150 * props.layer)} 
/>)(props => css`
  opacity: 0;
  animation: ${BackgroundFadeIn} ${Durations.timeVeryLong}s forwards ${Easings.easeOut};
  animation-delay: ${Durations.timeShort + (props.layer * Durations.timeShort)}s;
`);


export const Background = () => (
  <BackgroundWrapper>
    <BackgroundImage viewBox="0 0 1920 1080">
      <linearGradient id="sky" x2="0%" y2="100%">
        <BackgroundGradient color="#200044" offset="0%" />
        <BackgroundGradient color="#260036" offset="40%" />
        <BackgroundGradient color="#770033" offset="100%" />
      </linearGradient>
      
      <path d="M0 0h1920v1080H0z" fill="url(#sky)"/>

      <g>
        <BackgroundCircle layer={2} fill="#00001e" />
        <BackgroundCircle layer={1} fill="#000329" />
        <BackgroundCircle layer={0} fill="#000730" />
      </g>
    </BackgroundImage>
  </BackgroundWrapper>
)