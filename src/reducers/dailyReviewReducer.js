import { FETCH_GOALS, DAILY_REVIEW } from '../actions/types';

const INITIAL_STATE = {all: [], one: null};
export default function(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_GOALS:
      return{...state, all:action.payload.data };
    case DAILY_REVIEW:
      return[...state, action.payload ];
  default:
    return state;
  }
}