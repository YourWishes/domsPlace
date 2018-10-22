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
  Email = require('./../email/Email')
;

//Constants
const PUBLIC_PATH = path.join(__dirname, '..', '..', 'dist');

class App {
  constructor() {
    this.config = new Configuration(this);
    this.database = new DatabaseConnection(this);
    this.server = new Server(this);
    this.email = new Email(this);
  }

  getConfig() { return this.config; }
  getDatabase() { return this.database; }
  getServer() { return this.server; }
  getEmail() {return this.email;}

  //Primary Functions
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

    //Connect to our SMTP Host (For sending mail)
    try {
      this.log('Connecting to SMTP Server');
      await this.email.connect();
      console.log('...Done');
    } catch(e) {
      console.error("Failed to setup emails!");
      throw new Error(e);
    }

    //Now we need to start the server. This provides both a nice interface, as
    //well as our API Handler (including 2auth callback urls)
    try {
      this.log("Starting Server...");
      await this.server.start();
      console.log("...Done!");
    } catch(e) {
      console.error("Failed to start the server!");
      throw new Error(e);
    }
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
