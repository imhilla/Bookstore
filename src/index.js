import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  filter: 'All',
  books: [
    { id: 1, title: 'Mummies', category: 'Horror' },
    { id: 2, title: 'The Flash', category: 'Sci-Fi' },
  ],
};

const store = createStore(rootReducer(defaultState));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
