import { FETCH_GOALS } from '../actions/types';

const INITIAL_STATE = {all: [], one: null};
export default function(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_GOALS:
      return{...state, all:action.payload.data };
  default:
    return state;
  }
}