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
import { AnimatedRouteProps, AnimatedRoute } from '@yourwishes/app-simple-react/dist/public';
import { Loader as LoaderObject } from './../../objects/loader/';
import { PageEffect } from './../../objects/page/effect/';
import { Helmet } from 'react-helmet';

import './styles.scss';

//Title can be either a string (a title), or null (to indicate that this is a
//title-less page (e.g. the Home Page would be considered title-less)
export interface PageProps extends AnimatedRouteProps<any> {
  name:string,
  load?:undefined
}

export class PageAnimatedRouteWrapper extends React.Component<PageProps> {
  constructor(props:PageProps) {
    super(props);
  }

  render() {
    let { loadKey, className, simulate, children } = this.props;
    let Effect = PageEffect(loadKey);

    return (
      <main className="c-page">
        <Effect className={`c-page__effect ${className||""}`} simulate={simulate}>
          { children }
        </Effect>
      </main>
    );
  }
};

export const PageLoading = (props:PageProps) => {
  return (
    <div className="c-page__loader">
      <LoaderObject className="c-page__loader-element" />
    </div>
  );
};

export class Page extends React.Component<PageProps> {
  constructor(props:PageProps) {
    super(props);
  }

  render() {
    let { name } = this.props;

    return <AnimatedRoute
      {...this.props} load={() => import(`./../../pages/${name}/`)}
      loadKey={`pages/${name}`} className={`c-page--${name} p-${name}`}
      animateWrapper={PageAnimatedRouteWrapper as any} loading={PageLoading}
    />;
  }
}
