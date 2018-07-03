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
  path = require('path'),
  ConfigurationManager = require('./../configuration/ConfigurationManager'),
  DatabaseConnection = require('./../database/DatabaseConnection'),
  Server = require('./../server/Server'),
  Email = require('./../email/Email')
;

//Constants
const PUBLIC_PATH = path.join(__dirname, '..', '..', 'dist');

class App {
  constructor() {

  }

  getConfig()   { return this.config; }
  getDatabase() { return this.db; }
  getPublicDirectory() { return PUBLIC_PATH; }
  getServer() { return this.server; }
  getAPI() { return this.getServer().getAPI(); }
  getEmail() {return this.email;}

  //Primary Functions
  async start() {
    //First, load our configuration.
    try {
      console.log("Loading Configuration...");
      this.config = new ConfigurationManager(this);
      this.config.loadConfig();
      console.log("...Done!");
    } catch(e) {
      console.error("Failed to read config!");
      throw new Error(e);
    }

    //Next, connect to the database.
    try {
      console.log("Connecting to database...");
      this.db = new DatabaseConnection(this);
      this.db.loadQueries();//Load our prepared queries
      await this.db.connect();//Connect to the DB.
      console.log("...Done!");
    } catch(e) {
      console.error("Failed to connect to the database!");
      throw new Error(e);
    }

    //Connect to our SMTP Host (For sending mail)
    try {
      console.log('Connecting to SMTP Server');
      this.email = new Email(this);
      await this.email.connect();
      console.log('...Done');
    } catch(e) {
      console.error("Failed to setup emails!");
      throw new Error(e);
    }

    //Now we need to start the server. This provides both a nice interface, as
    //well as our API Handler (including 2auth callback urls)
    try {
      console.log("Starting Server...");
      this.server = new Server(this);
      await this.server.start();
      console.log("...Done!");
    } catch(e) {
      console.error("Failed to start the server!");
      throw new Error(e);
    }

  }

  //Database Specific
  onDatabaseConnected(db) { }
}

module.exports = App;
