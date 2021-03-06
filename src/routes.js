import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import AddNewGoal from './components/features';
import RequireAuth from './components/auth/require_auth';
import GoalsList from './components/goalsList';
import DailyReviewList from './components/dailyReviewList';
import Todo from './components/AddTodo'

export default (
   <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={AddNewGoal} />
        <Route path="goals" component={GoalsList} />
        <Route path="dailyReview" component={DailyReviewList} />
        <Route path="Todo" component={Todo} />
      </Route>
);

//add in auth later?
//<Route path="feature" component={RequireAuth(AddNewGoal)} />


