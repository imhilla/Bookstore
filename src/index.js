import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import books from './reducers/books'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(books)
console.log(store.getState()) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
