import { combineReducers } from 'redux';
import firstReducer from './first_reducer';

const rootReducer = combineReducers({
  notes: firstReducer
});

export default rootReducer;
