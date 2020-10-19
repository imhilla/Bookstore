import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import bookApp from './reducers/books'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(bookApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
