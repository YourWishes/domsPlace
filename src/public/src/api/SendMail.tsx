import { APIRequest } from "./APIRequest";

export const sendMail = (name:string, email:string, message:string) => APIRequest('mail/send', {
  name, email, message
}).then(e => e.body);

///@ts-ginore
(globalThis as any)['sendMail' as any] = sendMail as any;