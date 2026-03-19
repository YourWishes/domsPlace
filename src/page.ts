import { Request, Response } from 'express';
import { SectionData, sectionRender } from "./section";
import TemplateDefault from "./templates/default";
import { templateRender } from './template';

export type Page = {
  title?:string;
  sections:SectionData<any>[];
}

export const pageRoute = (page:Page) => {
  return async (req:Request, res:Response) => {
    try {
      const content = await templateRender({
        page,
        template: TemplateDefault,
        request: req
      });

      res.status(200).send(content);
    } catch (error) {
      res.status(500).send(`Internal Server Error`);
    }
  }
}