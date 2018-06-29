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
const fs = require('fs');//Used for file based configurations (local testing)
const CONFIG_PATH = './private/data/config.json';// TODO: Set this a different way?

//Constructor
class ConfigurationManager {
  constructor(app) {
    this.app = app;
    this.data = {};
  }

  loadConfig() {
    //Is this a Heroku Server? I need a nicer way of doing this in the future
    let process_variables = process.env;
    this.isHeroku = false;
    if(
      process_variables !== typeof undefined &&
      typeof process_variables.NODE_HOME !== typeof undefined &&
      process_variables.NODE_HOME.indexOf("heroku") !== -1
    ) {
      this.isHeroku = true;
    }

    //Read config data
    if(!this.isHeroku) {
      //TODO: Rather than use readSync, convert the whole function to async and use a library like fs-extra for async?
      let dataRaw = fs.readFileSync(CONFIG_PATH, 'utf8');
      let data = JSON.parse(dataRaw);
      if(!data) throw new Error("Failed to parse Config JSON! Check for an error and try again.");
      this.data = data;
    } else {
      this.data = process_variables;
    }
  }

  getValueOf(key) {
    if(this.isHeroku) {
      key = key.replace(/\./, '_').toUpperCase();
      if(typeof this.data[key] === typeof undefined) return null;
      return this.data[key];
    }
    return this.getValueOfRecursive(key.split("."));
  }

  getValueOfRecursive(key_array, data_obj) {
    if(typeof data_obj === typeof undefined) data_obj = this.data;
    if(typeof data_obj === typeof undefined) return null;

    let k = key_array[0];
    let o = data_obj[k];
    if(typeof o === typeof undefined) return null;

    //Awesome
    if(key_array.length > 1) {
      if(typeof o !== typeof {}) return null;
      key_array.shift();
      return this.getValueOfRecursive(key_array, o);
    }
    return o;
  }
}

module.exports = ConfigurationManager;//Export