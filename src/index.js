import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { rootReducer } from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
