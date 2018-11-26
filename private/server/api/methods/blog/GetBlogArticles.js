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

const APIHandler = require('./../../APIHandler');

const ERRORS = {
  tooMany: "Cannot return this many"
};

module.exports = class GetBlogArticles extends APIHandler {
  constructor(api) {
    super(api, ['GET'], '/blog');
  }

  async handle(request) {
    let page, perPage;
    if(request.hasInteger("page")) page = request.getInteger("page");
    if(request.hasInteger("perPage")) perPage = request.getInteger("perPage");

    perPage = Math.min(Math.max(perPage, 0), 20);

    return {
      ok: true,
      data: {
        pages: await request.getApp().getArticles().getArticlesPageCount(perPage),
        articles: await request.getApp().getArticles().getArticlesByPage(page, perPage)
      }
    };
  }
}
