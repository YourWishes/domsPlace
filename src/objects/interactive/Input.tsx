import * as React from 'react';
import styled, { css } from 'styled-components';
import { StylePlaceholder } from '@tools/styles';
import { Durations, Easings, Gutters, WidgetStyles, Colors, WidgetProps } from '@settings/all';
import { Button, ButtonGroup } from './Button';
import { Panel, ErrorPanel } from '@objects/feedback/Panel';

const InputStyles = (props:InputProps) => css`
  ${WidgetStyles(props)};
  width: 100%;
  display: block;
  background: none;

  ${StylePlaceholder(`
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    opacity: 0.2;
    transition: all ${Durations.timeShort}s ${Easings.easeOut};
  `)}
`;

const InputError = (props:{ children?:React.Children }) => (
  <Panel {...props} theme="danger" />
);

const InputInput = styled.input(InputStyles);
const TextareaInput = styled(styled.textarea(InputStyles))`
  min-width: 100%;
  max-width: 100%;
  min-height: 3.5em;
  resize: vertical;
`;

const InputLabel = styled.label`
  position: absolute;
  display: block;
  font-size: 0.9em;
  top: 0;
  left: ${Gutters.small};
  line-height: 1;
  transform: translateY(-50%);
  padding: ${Gutters.extraSmall} ${Gutters.small};
  z-index: 2;
  background: ${Colors.background};
  color: ${Colors.text};
`;

const InputWrapper = styled.div(props => `
  display: block;
  width: 100%;
  position: relative;
`);


export type InputType = (
  //HTML5:
  "color" | "date" | "datetime-local" | "email" | "month" | "number" | "range" |
  "search" | "tel" | "time" | "url" | "week" |

  //HTML4~
  "text" | "hidden" | "password" | "radio" | "checkbox" | "textarea" | "file" |
  "image"
);

export type InputProps = WidgetProps & {
  label?:string;
  type?:InputType;
  register?:any;
  error?:any;
}

export const Input = ({ error, label, ...props }:JSX.IntrinsicElements['input'] & InputProps) => {
  return <InputWrapper>
    { label ? <InputLabel>{ label }</InputLabel> : null }
    <InputInput ref={props.register} {...props as any} />
    { error ? <ErrorPanel error={error} /> : null }
  </InputWrapper>
};

export const TextArea = ({ error, label, ...props }:JSX.IntrinsicElements['textarea'] & InputProps) => {
  return <InputWrapper>
    { label ? <InputLabel>{ label }</InputLabel> : null }
    <TextareaInput ref={props.register} {...props as any} />
    { error ? <ErrorPanel error={error} /> : null }
  </InputWrapper>
};