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
import { get } from '@public/api/api';

export const withBlogTemplate = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        pending: false,
        error: undefined,
        pages: undefined,
        articles: undefined
      };
    }

    componentDidMount() {
      let { page, perPage } = this.props.match.params;
      page = page || 1;
      perPage = perPage || 7;

      this.setState({ pending: true, page, perPage });
      get('blog', { page, perPage }).then(blog => {
        let { articles, pages } = blog;

        articles.forEach(article => {
          article.url = `/blogs/articles/${article.handle}`
          article.image = require(`@assets/images/${article.image}`);
        });

        this.setState({ pending: undefined, error: undefined, articles, pages });
      }).catch(e => {
        this.setState({ pending: undefined, error: e });
      });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state}  />;
    }
  }
};
