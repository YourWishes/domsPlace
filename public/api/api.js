// Copyright (c) 2018 Dominic Masters
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

import queryString from 'query-string';

export const getUrl = request => {
  request = request || "";
  request = request.split('#');

  let r = "";
  if(request.length) r = request[0].toLowerCase();

  let slash = '/';
  if(r.startsWith('/')) slash = '';

  return `/api${slash}${r}`;
}

export const get = async (url, params) => {
  url = url || "";

  //Generate URL from query string
  let paramString = queryString.stringify(params);
  url = getUrl(url);
  if(url.indexOf('?') !== -1) {
    url += `&${paramString}`;
  } else {
    url += `?${paramString}`;
  }

  //Now make our fetch request.
  let res = await fetch(url, {
    crossDomain:true
  });
  if(res.status >= 400) throw new Error(`Server Responded with ${res.status}`);
  return await res.json();
};
