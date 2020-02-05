import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Colors, Gutters, Borders, WidgetStyles, WidgetProps } from '@settings/all';
import { Loader } from '@objects/feedback/Loader';

export type ButtonType = 'button' | 'reset' | 'submit';

export type ButtonProps = WidgetProps & {
  type?:ButtonType;
  to?:string;
  href?:string;
  children?:React.ReactChild;
  value?:string;
  pending?:boolean;
}

const StyledButton = styled.button<ButtonProps>(props => `
  ${WidgetStyles(props, { hover: true })};
  cursor: pointer;
`);

export const Button = ({ pending, children, ...props }:ButtonProps) => {
  let type = undefined;

  if(props.to) {
    type = Link;
  } else if(props.href) {
    type = 'a';
  } else if(props.type) {
  }
  
  return <StyledButton as={type as any} {...props}>
    { children }
    { pending ? <Loader /> : null }
  </StyledButton>
}

export const ButtonGroup = styled.div`
  ${StyledButton} + ${StyledButton} {
    margin-left: ${Gutters.small};
  }
`;