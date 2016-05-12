import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GoalsList from './components/goalsList';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={GoalsList} />
  </Route>
);