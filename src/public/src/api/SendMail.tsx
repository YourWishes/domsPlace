import { APIRequest } from "./APIRequest";

export const sendMail = (name:string, email:string, message:string) => APIRequest('mail/send', {
  name, email, message
}).then(e => e.body);