import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from 'rest-hooks';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

ReactDOM.render(
  <CacheProvider>
    <App />
  </CacheProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
