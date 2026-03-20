import { sectionRender } from "../../section";
import { Template } from "../../template";

import PSPTemplateHeroSection from "./hero";

const TEMPLATE_PSP:Template = {
  name: 'psp',
  sections: {
    'hero': PSPTemplateHeroSection
  },
  render: async ({ language, page, request }) => {
    return [
      `<!DOCTYPE html>`,
      `<html>`,
        `<head>`,
          `<meta charset="UTF-8" />`,
          `<title>${page.title ? page.title[language] : 'Untitled Page'}</title>`,
          `<style type="text/css">`,
            `body { font-family: Arial, sans-serif; margin: 0; padding: 0; }`,
            `h1 { color: #333; }`,
          `</style>`,
        `</head>`,

        `<body>`,
          `header`,
          ...(await Promise.all(page.sections.map(async section => {
            return await sectionRender({
              language,
              page,
              request,
              template: TEMPLATE_PSP,
              section
            });
          }))),
          `footer`,
        `</body>`,
      `</html>`
    ].join('\n');
  }
};

export default TEMPLATE_PSP;