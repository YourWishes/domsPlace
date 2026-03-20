import { SectionRenderer } from "../../section";

const DefaultTemplateHeroSection:SectionRenderer<'hero'> = async ({
  properties,
  template,
  language,
  request
}) => {
  return [
    '<div>',
    `<h1>${properties.title}</h1>`,
    '</div>'
  ].join('\n');
}

export default DefaultTemplateHeroSection;