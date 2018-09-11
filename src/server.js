import App from './components';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
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
      res.status(200).send(
        `<!doctype html>
          <html lang="en">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Streamer Panel</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="stylesheet" href="${assets.client.css}">
              <script src="${assets.client.js}" defer></script>
          </head>
          <body>
              <div id="root">${markup}</div>
          </body>
        </html>`
      );
    }
  });

export default server;