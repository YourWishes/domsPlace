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

import * as React from 'react';
import { Image, Link } from '@yourwishes/app-simple-react/dist/public';

export const Article = () => {
  return <>
    <p>
      It's finally here! After months in development my newly designed site has
      arrived, a whopping 11 months after I launched my previous site redesign!
      <br />Yes, I know I redesign the site a lot.
    </p>

    <p>
      As stated in my
      post about <Link to="/blog/article/dombot-redevelopment">
      DomBot ReDevelopment</Link>, I am building and upgrading a TypeScript
      based full-stack app framework to handle my various projects. As such this
      makes this website the second publicly available implementation of the
      framework, to great success.
    </p>

    <p>
      The domsPlace site redesign added many great features I've been trying to
      find time to implement easier, such as a simple method of creating a store,
      easier CSS based page transitions, loadable components and loadable routes.
      Not to mention they all work together at the same time, another task that
      was quite difficult to achieve.
    </p>

    <p>
      I do plan to go back to writing blog posts more often, and perhaps build
      a projects section of the site, where I can host coding curiousities that
      make it to a near production stage, but perhaps aren't worthy of build.
    </p>

    <p>
      In the mean time, take a look around and feel free to critique the new
      design, I'm not a UX/UI designer and don't claim to be particularly artistic
      in any way, so I would appreciate all feedback.
      <br /><br />Thanks,<br />Dominic.
    </p>
  </>;
};

export default Article;
