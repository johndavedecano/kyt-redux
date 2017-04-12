
import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import RouterContext from 'react-router/lib/RouterContext';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import match from 'react-router/lib/match';
import template from './template';
import routes from '../routes';

/**
 * Integrate Redux
 */
import { Provider } from 'react-redux';
import configureStore from './../redux/store';
import { syncHistoryWithStore } from 'react-router-redux';

/**
 * ======================================================================
 */
const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const port = parseInt(KYT.SERVER_PORT, 10);
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

// Setup server side routing.
app.get('*', (request, response) => {
  
  const memoryHistory = createMemoryHistory(request.originalUrl);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      
      // When a React Router route is matched then we render
      // the components and assets into the template.
      // Lets add redux here
      const store = configureStore();
      const initialState = JSON.stringify(store.getState());
      const root = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      response.status(200).send(template({
        root,
        jsBundle: clientAssets.main.js,
        cssBundle: clientAssets.main.css,
        initialState
      }));
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line no-console
});
