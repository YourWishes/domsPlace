import * as React from 'react';
import styled from 'styled-components';
import { WidgetProps, WidgetStyles } from '@settings/all';

export type PanelProps = WidgetProps & {

}

export const Panel = styled.div<PanelProps>`
  ${WidgetStyles};
  display: block;
`;

export const ErrorPanel = (props:{error:{message:string}}) => {
  let s = props.error.message;
  s = s.charAt(0).toUpperCase() + s.slice(1)
  return <Panel theme="danger">{s}</Panel>
}