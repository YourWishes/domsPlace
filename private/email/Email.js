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

const nodemailer = require('nodemailer');

class Email {
  constructor(app) {
    this.app = app;
  }

  getApp() {return this.app;}
  getConfig() {return this.getApp().getConfig();}
  getTransporter() {return this.transport;}

  getDestinationName() {return this.getConfig().getValueOf("smtp.destination.name");}
  getDestinationEmail() {return this.getConfig().getValueOf("smtp.destination.email");}
  getSourceName() {return this.getConfig().getValueOf("smtp.source.name");}
  getSourceEmail() {return this.getConfig().getValueOf("smtp.source.email");}

  connect() {
    if(!this.getConfig().getValueOf("smtp.host")) throw new Error("Missing SMTP Host Config");
    if(!this.getConfig().getValueOf("smtp.username")) throw new Error("Missing SMTP Username Config");
    if(!this.getConfig().getValueOf("smtp.password")) throw new Error("Missing SMTP Password Config");

    //We require some info about the person who handles the mailing.
    if(!this.getConfig().getValueOf("smtp.destination")) throw new Error("Missing SMTP Destination Config");
    if(!this.getConfig().getValueOf("smtp.destination.name")) throw new Error("Missing SMTP Destination Name Config");
    if(!this.getConfig().getValueOf("smtp.destination.email")) throw new Error("Missing SMTP Destination Email Config");
    if(!this.getConfig().getValueOf("smtp.source")) throw new Error("Missing SMTP Source Config");
    if(!this.getConfig().getValueOf("smtp.source.name")) throw new Error("Missing SMTP Source Name Config");
    if(!this.getConfig().getValueOf("smtp.source.email")) throw new Error("Missing SMTP Source Email Config");

    let ssl = false;
    let port = 587;

    if(this.getConfig().getValueOf("smtp.ssl")) {
      ssl = true
      port = 465;
    }
    port = this.getConfig().getValueOf("smtp.port") || port;

    this.transport = nodemailer.createTransport({
      host: this.getConfig().getValueOf("smtp.host"),
      port: port,
      secure: ssl,
      auth: {
        user: this.getConfig().getValueOf("smtp.username"),
        pass: this.getConfig().getValueOf("smtp.password")
      }
    });
  }

  async sendMail(options) {
    let o = {};
    o.options = options;
    o.email = this;
    o.resolver = function(resolve, reject) {
      this.resolve = resolve;
      this.reject = reject;
      console.log('Sending email to ' + this.options.to + '...');
      this.email.getTransporter().sendMail(this.options, this.onEmailCallback);
    }.bind(o);
    o.onEmailCallback = function(error, info) {
      this.error = error;
      this.info = info;

      if(error) {
        return this.reject(error);
      }

      console.log('Email sent to ' + this.options.to + '!');
      this.resolve(info);
    }.bind(o);

    let x = new Promise(o.resolver);
    return await x;
  }

  async sendMailClean(tos, fromName, fromEmail, subject, html, text) {
    //Create options
    let options = {};

    //TODO: Properly escape these emails & names, at the moment we're only using
    //emails we assume to be safe (those in the config)

    //From
    if(typeof fromName === "string" && fromName.length) {
      options.from = '"' +fromName+ '" <'+fromEmail+'>';
    } else {
      options.from = fromEmail;
    }

    //To (and CC)
    if(typeof tos === "string") tos = [tos];
    options.to = tos.join(', ');

    //Subject
    options.subject = subject || "Untitled";

    //HTML Formatted emails
    if(typeof html === "string" && html.length) options.html = html;
    if(typeof text === "string" && text.length) options.text = text;

    return await this.sendMail(options);
  }
}

module.exports = Email;
