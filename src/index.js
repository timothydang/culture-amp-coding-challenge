import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from 'rest-hooks';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <CacheProvider>
    <App />
  </CacheProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
