import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import * as serviceWorker from './serviceWorker';

import store from './store/index';

ReactDOM.render(
  <Provider store={store}><Routes /></Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
