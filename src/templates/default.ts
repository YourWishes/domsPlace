import { Template } from "../template";

const TEMPLATE_DEFAULT:Template = {
  name: 'default',
  render: async p => {
    return [
      `<!DOCTYPE html>`,
      `<html>`,
      `<head>`,
      `<title>${p.page.title[language] || 'Untitled Page'}</title>`,
      `</head>`,
      `<body>`,
      `body`,
      `</body>`,
      `</html>`
    ].join('\n');
  }
};

export default TEMPLATE_DEFAULT;