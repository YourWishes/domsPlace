import { withHandler } from "../../handler/handler";
import { validate } from 'email-validator';
import { createTransport } from 'nodemailer';
import * as escapeHTML from 'escape-html';

export interface sendMailParams {
  name:string;
  email:string;
  message:string;
}

export const sendMail = withHandler<sendMailParams>(async (e,c) => {
  if(!e.body) return { statusCode: 400, body: 'Missing Contact Details' };

  let { name, email, message } = e.body;
  if(!name) return { statusCode: 400, body: 'Missing Contact Name' };
  if(!email) return { statusCode: 400, body: 'Missing Contact Email' };
  if(!message) return { statusCode: 400, body: 'Missing Contact Message' };

  //Validate
  if(name.length > 128 || !name.replace(/\s/g, '').length) return { statusCode: 400, body: 'Invalid Name' };
  if(!validate(email)) return { statusCode: 400, body: 'Invalid Email' };
  if(message.length > 10000 || !message.replace(/\s/g,'').length) {
    return { statusCode: 400, body: 'Invalid Messatge' };
  }

  //Prepare mail
  let {
    EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_DEST, EMAIL_FROM
  } = process.env

  let transporter = createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT),
    secure: true,
    auth: {
      user: EMAIL_USER, pass: EMAIL_PASS
    }
  });

  let x = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: EMAIL_DEST,
    subject: 'Contact Message Received',
    text: `Contact Message Received:\n${message}\nFrom: ${name} ${email}`,
    html: `
      <h1>Contact Message Received</h1>
      <p>You have received a contact message from ${escapeHTML(name)} - ${escapeHTML(email)} who wrote:</p>
      <p>
        ${escapeHTML(message)}
      </p>
      <span>Time: ${new Date().toLocaleString()}
    `
  });
  return { statusCode: 200, body: x && x.accepted && x.accepted.length }
});