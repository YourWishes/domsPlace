import { Request } from "express";
import { Page } from "./page";
import { LocaleLanguage } from "./locale";
import { Section, SectionRenderer, SectionType, SectionTypeFor } from "./section";

export type TemplateSections = {
  [key in SectionType]?:SectionRenderer<key>;
};

export type Template = {
  name:string;
  sections:TemplateSections;
  render:(p:{
    page:Page;
    request:Request;
    language:LocaleLanguage;
  }) => Promise<string>;
}

export const templateRender = (p:{
  page:Page,
  template:Template,
  request:Request,
  language:LocaleLanguage
}):Promise<string> => {
  return p.template.render(p);
}