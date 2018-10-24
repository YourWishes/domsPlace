// Copyright (c) 2018 Dominic Masters
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

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const PageLoading = (props) => {
  if(props.error) return <span>Loading Error</span>;
  if(props.pastDelay) return <span>Loading...</span>;
  return null;
};

export const RouteWrapper = (props) => {
  let { page } = props.page;

  let render = () => {
    let CustomLoadable = Loadable({
      loader: page,
      loading: PageLoading
    });
    return <CustomLoadable />
  };

  return <Route {...props} render={render} />;
};

export default withRouter((props) => {
  const { match, location, history, children } = this.props;

  return (
    <Route>
      <Switch location={ location }>
        { children }
      </Switch>
    </Route>
  );
});