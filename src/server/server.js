import Express from 'express';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import webpackConfig from '../../webpack.config';
import configureStore from '../common/store';
import Counter from '../common/containers/Counter';

import { fetchCounter } from '../common/api/counter';

const app = new Express();
const port = 3000;

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Isomorphic Demo</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  fetchCounter((result) => {
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || result || 0;
    const initialState = fromJS({
      counterReducers: {
        count: counter,
      },
    });

    const store = configureStore(initialState);
    const html = renderToString(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const finalState = store.getState();
    res.send(renderFullPage(html, finalState));
  });
}

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler,
  {
    noInfo: true,
    publicPath: webpackConfig.output.publishPath,
  }));
app.use(webpackHotMiddleware(compiler));
app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
