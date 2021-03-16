// Copyright (c) 2021 Dominic Masters
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as express from 'express';
import { pageCompileAll, PATH_OUT } from './compiler';

const app = express()
const port = 80;

app.use((req, res, next) => {
  pageCompileAll();
  next();
})
app.use(express.static(PATH_OUT));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})