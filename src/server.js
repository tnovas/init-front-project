import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {  MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';

import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import isDocker from 'is-docker';
import express from 'express';
import Store from './store';
import Theme from './components/style';
import App from './components';

const staticPath = !isDocker() ? process.env.RAZZLE_PUBLIC_DIR : path.join(__dirname, '../build/public');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(express.static(staticPath));

server.use((req, res) => {

      const sheetsRegistry = new SheetsRegistry();

      const sheetsManager = new Map();

      const theme = Theme;

      const generateClassName = createGenerateClassName();

      const context = {};

      const store = Store();

      const markup = renderToString(
              <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                  <Provider store={store}>
                      <StaticRouter context={context} location={req.url}>
                          <App />
                      </StaticRouter>
                  </Provider>
                </MuiThemeProvider>
              </JssProvider>
      );

      const css = sheetsRegistry.toString();

    if (context.url) {
      res.redirect(context.url);
    } else {
      fs.readFile('./public/views/index.html', 'utf-8', function(error, source){
        var template = handlebars.compile(source);
        var html = template({markup: markup, assets: assets, css: css});
        res.send(html);
      });
    }
  });

export default server;
