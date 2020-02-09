import * as React from 'react';
import Helmet from 'react-helmet';

export interface PageWrapperProps {
  children:React.ReactNode;
  title:string|null;
}

export const PageWrapper = ({ title, children }:PageWrapperProps) => {
  if(!title) {
    title = 'domsPlace | Dominic Masters\' Personal Website';
  } else {
    title = `${title} | domsPlace`
  }

  return  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ title }</title>
    </Helmet>
    {children}
  </>;
}