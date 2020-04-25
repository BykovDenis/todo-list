import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import Provider from 'react-redux/lib/components/Provider';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './redux/reducers/combine-reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
];

let devTools;

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
} else {
  devTools = (f) => f;
}

const store = createStore(reducers, compose(applyMiddleware(...middlewares), devTools));

function AppRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
