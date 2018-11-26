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
  missingHandle: "Missing article handle.",
  notFound: "Cannot find that article."
};

module.exports = class GetBlogArticle extends APIHandler {
  constructor(api) {
    super(api, ['GET'], '/blog/article');
  }

  async handle(request) {
    if(!request.hasString('article', 128)) return { ok: false, data: ERRORS.missingHandle };

    let handle = request.getApp().createHandle(request.getString('article', 128));
    let article = await request.getApp().getArticles().getArticleByHandle(handle);

    if(!article) return { ok: false, data: ERRORS.notFound };

    return {
      ok: true,
      data: article
    };
  }
}
