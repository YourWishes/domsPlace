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
import { History } from 'history';
import { AnimatedSwitch, Router, Link } from '@yourwishes/app-simple-react/dist/public';
import { StarBackground } from './../../background/stars/';
import { Header } from './../header/';
import { Footer } from './../footer/';
import { Page } from './../../page/';

import './styles.scss';

const CLASS_ROUTE_CHANGE = 'is-route-changing';

//Paths (this will generate the necessary pages)
export interface LayoutProps {
  history:History
};

export class LayoutComponent extends React.Component<LayoutProps> {
  view:HTMLDivElement;

  constructor(props:LayoutProps) {
    super(props);
  }

  //We use these to let the body know we're changing routes, which is a fake
  //way of stopping a user changing the route mid transition.
  onTransitionStart() {
    if(document.body.classList.contains(CLASS_ROUTE_CHANGE)) return;
    console.log('Transition Start');
    document.body.classList.add(CLASS_ROUTE_CHANGE);
  }

  onTransitionEnd() {
    if(!document.body.classList.contains(CLASS_ROUTE_CHANGE)) return;
    console.log('Transition End');
    document.body.classList.remove(CLASS_ROUTE_CHANGE);
  }

  render() {
    let PageProps = {
      onEnter: e => this.onTransitionStart(),
      onEntered: e => this.onTransitionEnd(),
      timeout: 2*1000
    }
    return (
      <Router history={this.props.history}>
        <>
          <StarBackground />
          <div className="c-layout">

            {/* Header and Layout Wrapper */}
            <div className="c-layout__inner">
              <Header className="c-layout__header" />

              <div className="c-layout__view" ref={e => this.view = e}>
                <AnimatedSwitch>
                  <Page {...PageProps} exact path="/" name="home" />
                  <Page {...PageProps} exact path="/about" name="about" />
                  <Page {...PageProps} exact path="/contact" name="contact" />
                  <Page {...PageProps} exact path="/projects" name="projects" />

                  <Page {...PageProps} exact path="/legal/privacy" name="privacy" />

                  <Page {...PageProps} exact path="/blog" name="blog" />
                  <Page {...PageProps} exact path="/blog/article/:handle" name="article" />
                </AnimatedSwitch>
              </div>
            </div>

            {/* Footer */}
            <Footer className="c-layout__footer" />
          </div>
        </>
      </Router>
    );
  }
}
