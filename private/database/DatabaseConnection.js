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

const
  pgp = require('pg-promise')(),
  fs = require('fs'),
  path = require('path')
;

const QUERIES_PATH = 'queries';

class DatabaseConnection {
  constructor(app) {
    this.app = app;
  }

  getConfig() {return this.app.getConfig();}//Short Hand Method

  getQueriesPath() {
    return path.join(__dirname, QUERIES_PATH);
  }

  loadQueries() {
    //Load Queries
    let queries = {};

    if(fs.existsSync(this.getQueriesPath())) {
      let queryFiles = fs.readdirSync(this.getQueriesPath());
      for(var i = 0; i < queryFiles.length; i++) {
        let file = queryFiles[i];
        let x = fs.readFileSync(path.join(this.getQueriesPath(), file), 'utf8');
        queries[file.replace(".sql", "")] = x;
      }
    }

    this.queries = queries;
    return queries;
  }

  isConnected() {
    return typeof this.db !== typeof undefined;
  }

  async connect() {
    await this.connectThen();
  }

  async connectThen() {
    if(this.isConnected()) return true;

    if(
      !this.getConfig().getValueOf("database.connection")
      && !this.getConfig().getValueOf("database.url")
    ) {
      throw new Error("Missing DB Credentials.");
    }

    this.db = pgp(
      this.getConfig().getValueOf("database.connection") ||
      this.getConfig().getValueOf("database.url")
    );

    //Fire the event
    if(typeof this.app.onDatabaseConnected === "function") {
      await this.app.onDatabaseConnected(this);
    }

    return true;
  }

  getQuery(name) {
    return this.queries[name];
  }

  //Database Shorthand functions
  async none(queryName, data) {
    let q = this.getQuery(queryName);
    return await this.db.none(q, data);
  }

  async any(queryName, data) {
    let q = this.getQuery(queryName);
    let x = await this.db.any(q, data);
    return x;
  }

  async one(queryName, data) {
    let q = this.getQuery(queryName);
    let x = await this.db.one(q, data);
    return x;
  }

  async oneOrNone(queryName, data) {
    let q = this.getQuery(queryName);
    let x = await this.db.oneOrNone(q, data);
    return x;
  }

  async query(queryName, data) {
    let q = this.getQuery(queryName);
    let x = await this.db.query(q, data);
    return x;
  }
};

module.exports = DatabaseConnection;
