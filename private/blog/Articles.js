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

const DatabaseInterface = require('./../database/DatabaseInterface');

module.exports = class Articles extends DatabaseInterface {
  constructor(app) {
    super(app);
  }

  async getArticlesCount() {
    return (await this.store.getFromDatabase(
      `getArticlesCount`, 'getArticlesCount', {}, 'one'
    )).count;
  }

  async getArticleById(id) {
    return await this.store.getFromDatabase(
      `getArticleById_${id}`, `getArticleById`, {id}, 'oneOrNone'
    );
  }

  async getArticleByHandle(handle) {
    return await this.store.getFromDatabase(
      `getArticleByHandle_${handle}`, `getArticleByHandle`, {handle}, 'oneOrNone'
    );
  }

  async getArticlesPageCount(perPage) {
    if(!perPage) perPage = 10;
    let count = await this.getArticlesCount(perPage);
    return Math.ceil(count/perPage);
  }

  async getArticlesByPage(page, perPage) {
    if(!page) page = 1;
    if(!perPage) perPage = 10;

    page = Math.max(0, page - 1) * perPage;

    return await this.store.getFromDatabase(
      `getArticlesByPage_${page}_${perPage}`, `getArticlesByPage`,
      { count:perPage, offset:page }, 'any'
    );
  }



  async addArticle(handle, title, image, shortDescription, description, date) {
    if(!date) date = new Date();
    let article = await this.getDatabase().one('addArticle', {
      handle, title, image, shortDescription, description, date
    });
    this.store.flush();//In future support my wildcard syntax to make this no longer necessary.
    return article;
  }



  async updateArticle(article) {
    let newArticle = await this.getDatabase().one('updateArticle', article);
    this.store.flush();
    return newArticle;
  }
}
