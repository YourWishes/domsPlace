import * as React from 'react';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import test from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties';
import styled from 'styled-components';

export type CodeBlockProps = SyntaxHighlighterProps;

export const CodeBlock = styled((props:CodeBlockProps) => {
  return <SyntaxHighlighter {...props} style={test} />
})`
  font-size: 12px;
`