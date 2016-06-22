import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';


import ReduxPromise from 'redux-promise';


import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import AddNewGoal from './components/features';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import routes from './routes';
import {AUTH_USER} from './actions/types';
import {GoalsList} from './components/goalsList';


const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
//a redux store holds the complete state tree of the app
//compose is just a js function that passes the output from the rightmost function as the argument to the next function on the left
//all actions will go through middleWare (like express middleware) and then go through devTools. Then call a function with createStore. Then (below) createStoreWithMiddleware is called with all of the reducers as an argument ensuring that one action can affect all of the reducers
//const createStoreWithMiddleware = compose(applyMiddleware(promise), devTools)(createStore);
const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise, reduxThunk), devTools)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token){
  store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));





// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history = {browserHistory} routes ={routes} />
//   </Provider>
//   , document.querySelector('.container'));




