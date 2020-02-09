import { APIRequest } from "./APIRequest";

export interface SendMailParams {
  name:string, email:string, message:string
};

export const sendMail = (data:SendMailParams) => APIRequest('mail/send', data).then(e => e.body);