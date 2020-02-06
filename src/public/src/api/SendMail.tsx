import { Client } from "./Client";

export const sendMail = (name:string, email:string, message:string) => Client.post('mail/send', {
  name, email, message
});

///@ts-ginore
(globalThis as any)['sendMail' as any] = sendMail as any;