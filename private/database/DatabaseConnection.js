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

const pgp = require('pg-promise')();
const fs = require('fs');

const QUERIES_DIRECTORY = "queries";

class DatabaseConnection {
  constructor(app) {
    this.app = app;
  }

  getApp() { return this.app; }
  getConfig() {return this.getApp().getConfig();}

  isConnnected() {
    return typeof this.db !== typeof undefined;
  }

  async connect() {
    //Check Configuration
    if(!this.getConfig().has("database.connection") && !this.getConfig().has("database.url")) throw new Error("Missing Database Connection URL!");

    //Load queries into cache
    let queries = {};
    let queryDir = `${__dirname}/${QUERIES_DIRECTORY}`
    let types = fs.readdirSync(queryDir);
    for(let i = 0; i < types.length; i++) {
      //Now Scan each file in this directory
      let dir = `${queryDir}/${types[i]}`;
      let dirContents = fs.readdirSync(dir);
      for(let x = 0; x < dirContents.length; x++) {
        //Now read each file within this dir..
        let filePath = `${dir}/${dirContents[x]}`;
        let query = fs.readFileSync(filePath, 'utf8');
        //Now Save our query as filename minus extension.
        queries[dirContents[x].split('.')[0]] = query;
      }
    }

    this.queries = queries;

    //Connect to Database
    this.db = await pgp( this.getConfig().get("database.connection") || this.getConfig().get("database.url") );

    //Now run any "Create" queries
    let keys = Object.keys(queries);
    for(let i = 0; i < keys.length; i++) {
      let k = keys[i];
      if(!k.startsWith("Create")) return;
      await this.none(k);
    };
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
}

module.exports = DatabaseConnection;
