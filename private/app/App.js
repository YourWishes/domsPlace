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

//Imports
const
  Configuration = require('./../config/Configuration'),
  DatabaseConnection = require('./../database/DatabaseConnection'),
  Server = require('./../server/Server'),
  Email = require('./../email/Email'),
  CacheStore = require('./../cache/CacheStore'),

  Articles = require('./../blog/Articles')
;

class App {
  constructor() {
    this.config = new Configuration(this);
    this.database = new DatabaseConnection(this);

    this.articles = new Articles(this);

    this.server = new Server(this);
    this.email = new Email(this);
  }

  getConfig() { return this.config; }
  getDatabase() { return this.database; }
  getEmail() {return this.email;}
  getServer() {return this.server;}

  getArticles() {return this.articles;}

  async init() {
    this.log('Starting App...');

    //Load configuration...
    this.log('Reading Configuration...');
    try {
      await this.config.loadConfig();
    } catch(e) {
      this.error('Failed to load configuration!');
      this.error(e);
      return;
    }

    //Connect to the Database
    this.log('Connecting to the Database...');
    try {
      await this.database.connect();
    } catch(e) {
      this.error('Failed to connect to database!');
      this.error(e);
      return;
    }

    //Connect to Email
    this.log('Connecting to Email...');
    try {
      this.email.connect();
    } catch(e) {
      this.error('Failed to connect to email!');
      this.error(e);
      return;
    }

    //Start the server
    this.log('Starting Server...');
    try {
      await this.server.init();
    } catch(e) {
      this.error('Failed to start server!');
      this.error(e);
      return;
    }

    this.log('App ready');
  }

  // Common Functions //
  createHandle(str) {
    //Creates a human handle for the supplied string, this won't take any kind
    //of existing checks into account, be sure to append a numeric value to the
    //end of this string such as app.createHandle("test")+"-2";
    str = str.toLowerCase();
    ['"', "'", "\\", "(", ")", "[", "]"].forEach(e => str = str.replace(e, ""));

    str = str.replace(/\W+/g, "-");

    if (str.charAt(str.length - 1) == "-") {
      str = str.replace(/-+\z/, "");
    }

    if (str.charAt(0) == "-") {
      str = str.replace(/\A-+/, "");
    }

    return str;
  }

  // Logging Functions //
  log(e) {
    //Will allow for extra logging
    console.log(e)
  }

  error(e) {
    console.error(e);
  }
}

module.exports = App;
