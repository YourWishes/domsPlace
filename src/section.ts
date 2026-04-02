import { Request } from 'express';
import HeroSection from './sections/hero';
import { Template } from './template';
import { LocaleLanguage } from './locale';
import { Page } from './page';

const SECTION_TYPES = <const>{
  'hero': HeroSection
}

export type Section<P> = {
  properties:P;
  validate:(properties:P) => P;
};

export type SectionType = keyof typeof SECTION_TYPES;

export type SectionTypeFor<T extends SectionType> = (
  typeof SECTION_TYPES[T]
);

export type SectionProperties<T extends SectionType> = (
  SectionTypeFor<T>['properties']
);

export type SectionData<T extends SectionType> = {
  type:T;
  properties:SectionProperties<T>;
}

export type SectionRenderer<T extends SectionType> = (p:{
  properties:SectionProperties<T>;
  template:Template;
  language:LocaleLanguage;
  request:Request;
  page:Page;
}) => Promise<string>;

export const sectionRender = async <T extends SectionType>(p:{
  request:Request,
  section:SectionData<T>;
  template:Template;
  language:LocaleLanguage;
  page:Page;
}):Promise<string> => {
  if(!p.template.sections[p.section.type]) {
    console.warn(`No section renderer found for section type "${p.section.type}" in template "${p.template.name}".`);
    return '';
  }

  const renderer = p.template.sections[p.section.type] as SectionRenderer<T>;
  const properties = p.section.properties;
  return await renderer({
    ...p,
    properties: p.section.properties
  });
}