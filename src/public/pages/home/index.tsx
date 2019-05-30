// Copyright (c) 2019 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import * as React from 'react';
import { Link, Image, ImageProps } from '@yourwishes/app-simple-react/dist/public';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { HomePageBanner } from './sections/banner/';
import { PageWrapper } from './../../components/page/wrapper';

import './styles.scss';

export interface NavBoxProps extends ImageProps, RouteComponentProps {
  to:string
};

export const NavBox = withRouter<NavBoxProps>((props:NavBoxProps) => {
  let { to, location, alt } = props
  if(location.pathname.indexOf(to) === 0) to = "/";
  return (
    <Link to={to} title={alt} className="p-home__nav-block">
      <Image {...props} className="p-home__nav-block-image" />
    </Link>
  );
});


export class HomePage extends React.Component<any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    return <PageWrapper title={null}>
      <div className="p-home__feature">
        <HomePageBanner />
      </div>

      <nav className="p-home__nav">
        <NavBox to="/about" src={require('./../../assets/navigation/about-me.svg')} alt="About Me" />
        <NavBox to="/blog" src={require('./../../assets/navigation/blog.svg')} alt="Blog" />
        {/*<NavBox to="/projects" src={require('./../../assets/navigation/about.jpg')} alt="Projects" />*/}
        <NavBox to="/contact" src={require('./../../assets/navigation/contact.svg')} alt="Contact Me" />
      </nav>
    </PageWrapper>;
  }
};

export default HomePage;
