import { Request } from "express";
import { Page } from "./page";

export type Template = {
  name:string;
}

export const templateRender = async (p:{
  page:Page,
  template:Template,
  request:Request
}):Promise<string> => {
  return 'template';
}