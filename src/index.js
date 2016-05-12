import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
//TODO ask ahmed to explain how this line works again
const createStoreWithMiddleware = compose(applyMiddleware(promise), devTools)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes ={routes} />
  </Provider>
  , document.querySelector('.container'));
