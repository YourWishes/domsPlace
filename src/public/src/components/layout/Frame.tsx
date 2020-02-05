import * as React from 'react';
import styled from 'styled-components';
import { Gutters, MediaQueries } from '@settings/all';

export const Frame = styled((p:{
  padded?:boolean;
  children:React.ReactNode;
  className?:string;
}) => {
  let { padded, ...props } = p;
  if(padded) return <div {...props} />
  return <>{props.children}</>
})(props => `
  ${props.padded ? `padding: ${Gutters.extraSmall};`:''}

  ${MediaQueries.mobileUp} {
    ${props.padded ? `padding: ${Gutters.small};`:''} 
  }

  ${MediaQueries.tabletUp} {
    ${props.padded ? `padding: ${Gutters.small} ${Gutters.medium};`:''} 
  }

  ${MediaQueries.laptopUp} {
    ${props.padded ? `padding: ${Gutters.small} ${Gutters.large};`:''} 
  }

  ${MediaQueries.desktopUp} {
    ${props.padded ? `padding: ${Gutters.medium} ${Gutters.extraLarge};`:''} 
  }
`);