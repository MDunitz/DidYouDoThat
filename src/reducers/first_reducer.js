import {FIRST_ACTION} from '../actions/index';


export default function(state = [], action) {
  console.log('back into reducer', action.type)
  switch(action.type) {
    case FIRST_ACTION:
    {
      console.log(action.payload.data.data, 'its lit');
      return action.payload.data.data;
    }
  }
  return state;
}