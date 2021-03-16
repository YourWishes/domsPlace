// Copyright (c) 2021 Dominic Masters
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as fs from 'fs';
import * as path from 'path';

// Path Definitions
export const PATH_HTML = path.join(__dirname, 'html');
export const PATH_CSS = path.join(__dirname, 'css');
export const PATH_OUT = path.join(__dirname, '..', 'dist');

// Load Methods
const loadFile = (dir:string, ext:string) => {
  const bits = dir.split('/').join('\\').split('\\');
  const fileName = bits.pop();
  const fullDir = path.join(__dirname, ...bits, `${fileName}.${ext}`);

  if(!fs.existsSync(fullDir)) return '';
  return fs.readFileSync(fullDir, 'utf-8');
}

const loadHtml = (fn:string) => loadFile(fn, 'html');
const loadCss = (fn:string) => loadFile(fn, 'css');

const pageCompile = (page:string) => {
  // Load Layout
  const htmlLayout = loadHtml('partials/layout/layout');
  const cssLayout = loadCss('partials/layout/layout');

  // Load Page
  const htmlPage = loadHtml(`pages/${page}/${page}`);
  const cssPage = loadCss(`pages/${page}/${page}`);

  // Inject styles
  let compiled = htmlLayout.replace('{{styles}}', [
    cssLayout,
    cssPage
  ].join('\n'));

  // Inject content
  compiled = compiled.replace('{{main}}', htmlPage);

  // Inject variables
  Object.entries({
    'year': new Date().getFullYear()
  }).forEach(entry => {
    const [ key, value ] = entry;
    const variable = `{{${key}}}`;
    while(compiled.includes(variable)) {
      compiled = compiled.replace(variable, `${value}`);
    }
  });

  return compiled;
}

const pageGenerate = (out:string, page:string) => {
  const compiled = pageCompile(page);
  console.log(page, '->', out);
  if(!fs.existsSync(PATH_OUT)) fs.mkdirSync(PATH_OUT);
  fs.writeFileSync(path.join(PATH_OUT, `${out}.html`), compiled);
}

export const pageCompileAll = () => {
  // Read pages
  Object.entries({
    'index': 'home',
    'privacy': 'privacy'
  }).forEach(entry => {
    const [ out, page ] = entry;
    pageGenerate(out, page);
  });
}
