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
//a redux store holds the complete state tree of the app
//compose is just a js function that passes the output from the rightmost function as the argument to the next function on the left
//all actions will go through middleWare (like express middleware) and then go through devTools. Then call a function with createStore. Then (below) createStoreWithMiddleware is called with all of the reducers as an argument ensuring that one action can affect all of the reducers
const createStoreWithMiddleware = compose(applyMiddleware(promise), devTools)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes ={routes} />
  </Provider>
  , document.querySelector('.container'));
