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
  http = require('http'),
  https = require('https'),
  express = require('express'),
  bodyParser = require('body-parser'),
  fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  CompilerOptions = require('./WebpackCompilerOptions')
;

//Constants
const LANDING_FILE = 'index.html';

class Server {
  constructor(app) {
    this.app = app;

    //Server settings
    this.ip =
      app.getConfig().getValueOf("IP") ||
      app.getConfig().getValueOf("ip") ||
      app.getConfig().getValueOf("server.ip") ||
      app.getConfig().ip ||
      process.env.ip ||
      process.env.IP ||
      null
    ;
    this.port =
      app.getConfig().getValueOf("PORT") ||
      app.getConfig().getValueOf("port") ||
      app.getConfig().getValueOf("server.port") ||
      app.getConfig().port ||
      process.env.port ||
      process.env.PORT ||
      80
    ;
    this.apiBase = app.getConfig().getValueOf("apiBase") || "/API/";
    if(!this.apiBase.endsWith("/")) this.apiBase += "/";

    this.useHTTPS = app.getConfig().getValueOf("ssl") && app.getConfig().getValueOf("ssl.enable")
    if(this.useHTTPS) {
      this.portHTTPS = this.config.ssl.port || 443;
      if(!this.config.ssl.key) {
        throw new Error("Invalid SSL Key in Server Configuration");
      }
      if(!this.config.ssl.cert) {
        throw new Error("Invalid SSL Cert in Server Configuration");
      }

      //TODO: Clean this up, don't use static files (use path.join etc) and should these be flat files?
      let keyFile = __dirname+'./../'+this.config.ssl.key;
      let certFile = __dirname+'./../'+this.config.ssl.cert;
      if(!fs.existsSync(keyFile)) {
        throw new Error("Key file \"" + keyFile + "\" doesn't exist!");
      }
      if(!fs.existsSync(certFile)) {
        throw new Error("Key file \"" + certFile + "\" doesn't exist!");
      }

      this.key = fs.readFileSync(keyFile, 'utf8');
      this.cert = fs.readFileSync(certFile, 'utf8');
    }

    //Setup the express wrapper.
    this.express = express();

    //Setup Express Middleware
    this.express.use(bodyParser.json({
      type:'application/json' // to support JSON-encoded bodies
    }));
    this.express.use(bodyParser.urlencoded({
      extended: true
    }));
    this.express.use(express.static('./dist'));

    //Finally our catcher for all other enquiries
    this.express.get('*', this.onGetRequest.bind(this));

    //Create our HTTP and (if needed HTTPS) server(s)
    this.http = http.createServer(this.express);
    this.http.on('error', this.onServerError.bind(this));

    if(this.isHTTPS()) {
      if(!this.key) throw new Error("Can't start server, missing SSL Key");
      if(!this.cert) throw new Error("Can't start server, missing SSL Cert");

      this.https = https.createServer({
        key: this.key,
        cert: this.cert
      }, this.express);
      this.https.on('error', this.onServerError.bind(this));
    }

    //Create our bundler
    this.compiler = webpack(CompilerOptions(this, this.app));
  }

  getConfig() {return this.config;}
  getIP() {return this.ip; }
  getPort() {return this.port;}
  getAPIBase() {return this.apiBase;}
  isHTTPS() {return this.useHTTPS;}
  getHTTPSPort() {return this.portHTTPS;}
  getKey() {return this.key;}
  getCertificate() {return this.cert;}
  getLandingFile() {return path.join(this.app.getPublicDirectory(), LANDING_FILE);}

  isRunning() {
    if(typeof this.http !== typeof undefined) {
      return this.http.listening;
    }
    return false;
  }

  async start() {
    if(typeof this.startPromise !== typeof undefined) {
      await this.startPromise();
      return;
    }
    this.startPromise = new Promise(this.startServerPromise.bind(this));//Lazy Programming FTW
    await this.startPromise;
  }

  startServerPromise(resolve, reject) {
    this.startResolve = resolve;
    this.startReject = reject;

    let options = {
      host: this.ip,
      port: this.port
    };

    //Create our webpack watcher
    this.watcher = this.compiler.watch({

    }, this.onWatchChange.bind(this));

    //Start the HTTP Server
    this.http.listen(options, this.onServerStart.bind(this));

    //HTTPS?
    if(this.https) {
      this.https.listen(options, this.portHTTPS);
    }
  }

  onServerStart() {
    this.bound = this.http.address();
    this.startResolve(this);
  }

  onServerError(e) {
    console.log("A Server Error occured!");
    this.startReject(e);
    this.stop();
    throw new Error(e);
  }


  async stop() {
    if(typeof this.stopPromise !== typeof undefined) {
      await this.stopPromise;
      return;
    }
    this.stopPromise = new Promse(this.stopPromise.bind(this));
    await this.stopPromise;
    delete this.http;
    delete this.https;
    delete this.stopPromise;
    delete this.watcher;
  }

  stopPromise(resolve, reject) {
    this.stopResolve = resolve;
    this.stopReject = reject;

    if(typeof this.watcher !== typeof undefined) {
      this.watcher.close(() => {
      });
    }

    try {
      this.http.close(this.onHTTPClosed.bind(this));
    } catch(e) {
      this.stopReject(e);
    }
  }

  onHTTPClosed() {
    if(typeof this.https === typeof undefined) {
      this.resolve();
      return;
    }

    try {
      this.https.close(this.onHTTPSClosed.bind(this));
    } catch(e) {
      this.stopReject(e);
    }
  }

  onHTTPSClosed() {
    this.resolve();
  }

  onWatchChange(error, stats) {
    if(error) console.log(error);
  }

  onGetRequest(req, res) {
    //Used as our "catch all get requests"
    res.sendFile(this.getLandingFile());
  }
}

module.exports = Server;
