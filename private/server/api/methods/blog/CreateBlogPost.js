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
  password: 'Missing, or invalid password',
  title: 'Missing or invalid title',
  image: 'Missing or invalid image',
  shortDescription: 'Missing or invalid Short Description',
  description: 'Missing or invalid description',
  internal: 'An internal error occurred'
};

const LENGTHS = {
  title: 128,
  image: 512,
  shortDescription: 2048,
  description: 65536
};

module.exports = class GetBlogArticle extends APIHandler {
  constructor(api) {
    super(api, ['POST'], '/blog/article');
  }

  async handle(request) {
    //Until we have the server running passport or some other auth service...
    if(!request.hasString('password', 128)) return { ok: false, data: ERRORS.password };
    let password = request.getString('password', 128);
    if(password !== request.getApp().getConfig().get('admin.password')) return { ok: false, data: ERRORS.password };
    //Everything after this point should be fine to keep.

    if(!request.hasString('title', LENGTHS.title)) return { ok: false, data: ERRORS.title };
    if(!request.hasString('image', LENGTHS.image)) return { ok: false, data: ERRORS.image };
    if(!request.hasString('shortDescription', LENGTHS.shortDescription)) return { ok: false, data: ERRORS.shortDescription };
    if(!request.hasString('description', LENGTHS.description)) return { ok: false, data: ERRORS.description };

    let title = request.getString('title', LENGTHS.title);
    let image = request.getString('image', LENGTHS.image);
    let shortDescription = request.getString('shortDescription', LENGTHS.shortDescription);
    let description = request.getString('description', LENGTHS.description);

    //Generate a handle
    let handle;
    let iteration = -1;
    while(!handle) {
      let testingHandle = request.getApp().createHandle(`${title}${iteration>0?iteration:''}`);
      iteration++;
      let existingArticle = await request.getApp().getArticles().getArticleByHandle(testingHandle);
      if(existingArticle) continue;
      handle = testingHandle;
    }

    //Create the article
    let article;
    try {
      article = await request.getApp().getArticles().addArticle(handle, title, image, shortDescription, description);
    } catch(e) {
      console.error(e);
      return { ok: 500, data: ERRORS.internal };
    }

    return { ok: true, data: article };
  }
}
