import { Request } from 'express';
import HeroSection from './sections/hero';
import { Template } from './template';

const SECTION_TYPES = <const>{
  'hero': HeroSection
}

export type Section<P> = {
  properties:P;
  render:(params:{ properties:P, template:Template }) => string;
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

export const sectionRender = async (p:{
  request:Request,
  section:SectionData<SectionType>;
  template:Template;
}):Promise<string> => {
  return '';
}