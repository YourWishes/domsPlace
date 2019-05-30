// Copyright (c) 2019 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicen se, and/or sell copies of the Software, and to
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

import { RESPONSE_OK, RESPONSE_BAD_REQUEST, RESPONSE_INTERNAL_ERROR } from '@yourwishes/app-api';
import { ServerAPIRequest, ServerAPIResponse, ServerAPIHandler } from '@yourwishes/app-server';
import { isValidEmail } from '@yourwishes/app-email';
import { domsPlaceApp } from './../../app/';

export const EMAIL_MAXLENGTH = 256;
export const NAME_MAXLENGTH = 128;
export const MESSAGE_MAXLENGTH = 8192;

export class sendContact extends ServerAPIHandler {
  constructor() {
    super('POST', '/contact/send');
  }

  async onRequest(request:ServerAPIRequest):Promise<ServerAPIResponse> {
    if(!request.hasString('email', EMAIL_MAXLENGTH)) return { code: RESPONSE_BAD_REQUEST, data: 'Missing or invalid email' };
    if(!request.hasString('name', NAME_MAXLENGTH)) return { code: RESPONSE_BAD_REQUEST, data: 'Missing or invalid name' };
    if(!request.hasString('message', MESSAGE_MAXLENGTH))  return { code: RESPONSE_BAD_REQUEST, data: 'Missing or invalid message' };

    let email = request.getString('email', EMAIL_MAXLENGTH);
    if(!isValidEmail(email)) return { code: RESPONSE_BAD_REQUEST, data: 'Missing or invalid email' };

    let name = request.getString('name', NAME_MAXLENGTH);
    let message = request.getString('message', MESSAGE_MAXLENGTH);

    //Prepare to send email
    let app:domsPlaceApp = request.owner.app as domsPlaceApp;

    //First send an email to the site owner
    request.owner.logger.debug(`Sending email from ${email}...`);
    let ownRes = await app.email.sendMail(app.domsPlace.contact, 'Contact Message Received', `
      Contact Message received from ${email}, who wrote:
      ${message}
    `, `
      <p>Contact Message received from ${email} who wrote:</p>
      <p>
        ${ message.replace(/</g, '&lt').replace(/>/g, '&gt;').replace(/\n/g, '<br />') }
      </p>
    `);
    if(!ownRes) return { code: RESPONSE_INTERNAL_ERROR, data: false };

    //Now Send an email to the client
    let clientRes = await app.email.sendMail(app.domsPlace.contact, 'Contact Message Sent', `
      Contact Message Sent! Thanks for reaching out,
      if this was not you then ignore this email.
    `, `
      <p>Contact Message Sent! Thanks for reaching out. If this was not you then ignore this email.</p>
    `);
    if(!clientRes) return { code: RESPONSE_INTERNAL_ERROR, data: false };
    request.owner.logger.debug(`...Done`);

    //OK!
    return { code: RESPONSE_OK, data: true };
  }
}
