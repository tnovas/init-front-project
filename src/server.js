import App from './components';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import isDocker from 'is-docker';
import express from 'express';

const staticPath = !isDocker() ? process.env.RAZZLE_PUBLIC_DIR : path.join(__dirname, '../build/public');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(staticPath))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      fs.readFile('./public/views/index.html', 'utf-8', function(error, source){
        var template = handlebars.compile(source);
        var html = template({markup: markup, assets: assets});
        res.send(html);
      });
    }
  });

export default server;
