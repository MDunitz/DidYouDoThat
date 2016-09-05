import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import createGoalReducer from './goals';
import getGoalsReducer from './getGoalsReducer';
import postDailyReview from './dailyReviewReducer';
import todos from './todosReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers({
  form : form,
  auth : authReducer,
  createGoal : createGoalReducer, 
  goalsList : getGoalsReducer,
  dailyReview: postDailyReview,
  todos: todos,
  visibilityFilter: visibilityFilter

});

export default rootReducer;
