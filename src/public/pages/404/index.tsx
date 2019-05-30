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
import { Title } from './../../objects/typography/heading/';
import { PageBoundary } from './../../objects/page/boundary/';
import { ButtonGroup, Button } from './../../objects/widgets/button/';
import { PageWrapper } from './../../components/page/wrapper/';

import './styles.scss';

export class NotFoundPage extends React.Component<any> {
  constructor(props:any) {
    super(props);
  }

  render() {

    return <PageWrapper title={null}>
      <PageBoundary small className="c-404-page">
        <Title className="c-404-page__title">
          404 - Not Found
        </Title>

        <div className="c-404-page__content">
          <p>
            Sorry, the page you requested could not be found. It may've been
            deleted or relocated. If you feel this is an error you can contact me,
            otherwise you can go back home and take a look around.
          </p>

          <ButtonGroup className="c-404-page__buttons">
            <Button to="/" primary>Home</Button>
            <Button to="/contact" secondary>Contact Me</Button>
          </ButtonGroup>
        </div>
      </PageBoundary>
    </PageWrapper>;
  }
}

export default NotFoundPage;
