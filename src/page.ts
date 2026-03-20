import { Request, Response } from 'express';
import { SectionData, sectionRender } from "./section";
import TemplateDefault from "./templates/default";
import { templateRender } from './template';
import { LocaleString } from './locale';

export type Page = {
  title?:LocaleString;
  sections:SectionData<any>[];
}

export const pageRoute = (page:Page) => {
  return async (req:Request, res:Response) => {
    console.log(`Got Request. Header Agent: ${req.headers['user-agent']}`);
    try {
      const content = await templateRender({
        page,
        template: TemplateDefault,
        request: req,
        language: 'en'
      });

      res.status(200).send(content);
    } catch (error) {
      res.status(500).send(`Internal Server Error`);
    }
  }
}