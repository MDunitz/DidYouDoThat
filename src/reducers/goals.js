import { Create_Goal } from '../actions/types';

export default function(state =[], action){
  switch(action.type){
    case Create_Goal:
      return[...state, action.payload ];
  }
  return state;
}