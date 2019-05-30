// Copyright (c) 2019 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { SimpleReactCompiler } from '@yourwishes/app-simple-react';

const gtag = `<script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=UA-66393210-1"></script>
<script type="text/javascript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-66393210-1');
</script>`;

const content = `
  Please Wait...
`;

export class domsPlaceCompiler extends SimpleReactCompiler {
  constructor() {
    super({
      title: 'domsPlace - Personal Site of Dominic Masters',
      keywords: 'domsplace, programming, gaming, shopify, livestreaming, dominic, masters, dom',
      description: 'domsPlace is the home of programmer and developer Dominic Masters, specialising in eCommerce and full-stack development solutions for a wide range of platforms, primarily Shopify.',
      app_handle: 'domsPlace',
      language: 'en-AU',
      gtag,
      page_content: content
    });
  }
}
