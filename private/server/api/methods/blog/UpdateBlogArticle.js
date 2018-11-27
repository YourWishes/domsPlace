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

const LENGTHS = {
  title: 128,
  image: 512,
  shortDescription: 2048,
  description: 65536
};

const ERRORS = {
  password: 'Missing, or invalid password',
  missingHandle: "Missing article handle.",
  notFound: "Cannot find that article.",
  internal: 'An internal error occurred'
};

module.exports = class GetBlogArticle extends APIHandler {
  constructor(api) {
    super(api, ['PUT', 'GET'], '/blog/update');
  }

  async handle(request) {
    //Until we have the server running passport or some other auth service...
    if(!request.hasString('password', 128)) return { ok: 401, data: ERRORS.password };
    let password = request.getString('password', 128);
    if(password !== request.getApp().getConfig().get('admin.password')) return { ok: 401, data: ERRORS.password };
    //Everything after this point should be fine to keep.

    if(!request.hasString('article', 128)) return { ok: false, data: ERRORS.missingHandle };

    let handle = request.getApp().createHandle(request.getString('article', 128));
    let article = await request.getApp().getArticles().getArticleByHandle(handle);
    if(!article) return { ok: 404, data: ERRORS.notFound };

    if(request.hasString('title', LENGTHS.title)) article.title = request.getString('title', LENGTHS.title);
    if(request.hasString('image', LENGTHS.image)) article.image = request.getString('image', LENGTHS.image);
    if(request.hasString('shortDescription', LENGTHS.shortDescription)) article.shortDescription = request.getString('shortDescription', LENGTHS.shortDescription);
    if(request.hasString('description', LENGTHS.description)) article.description = request.getString('description', LENGTHS.description);

    try {
      await request.getApp().getArticles().updateArticle(article);
    } catch(e) {
      console.error(e);
      return { ok: 500, data: ERRORS.internal };
    }

    return {
      ok: true,
      data: article
    };
  }
}
