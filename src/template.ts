import { Request } from "express";
import { Page } from "./page";

export type Template = {
  name:string;
  render:(p:{
    page:Page;
    request:Request;
    language:Language;
  }) => Promise<string>;
}

export const templateRender = (p:{
  page:Page,
  template:Template,
  request:Request
}):Promise<string> => {
  return p.template.render(p);
}