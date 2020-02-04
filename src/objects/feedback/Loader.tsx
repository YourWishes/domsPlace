import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Durations, Easings, Colors } from '@settings/all';

const LoaderSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderSpinner = styled(props => (
  <svg {...props} width="38" height="38" viewBox="0 0 38 38">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".75" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
        </path>
      </g>
    </g>
  </svg>
))`
  display: block;
  width: 1.5em;
  height: 1.5em;
  max-width: 100%;
  max-height: 100%;
  
  animation: ${LoaderSpin} ${Durations.timeLong}s infinite ${Easings.easeInOut};

  * {
    stroke: ${Colors.text};
  }
`

const LoaderInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Loader = styled(props => (
  <div {...props}>
    <LoaderInner>
      <LoaderSpinner />
    </LoaderInner>
  </div>
))`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
`;