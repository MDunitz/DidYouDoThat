import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import createGoalReducer from './goals';
import getGoalsReducer from './getGoalsReducer';
import postDailyReview from './dailyReviewReducer';

const rootReducer = combineReducers({
  form : form,
  auth : authReducer,
  createGoal : createGoalReducer, 
  goalsList : getGoalsReducer,
  dailyReview: postDailyReview

});

export default rootReducer;
