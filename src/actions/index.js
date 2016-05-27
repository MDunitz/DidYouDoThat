
import axios from 'axios';
import { CREATE_GOAL, FETCH_GOALS, FIRST_ACTION  } from './types';

const ROOT_URL = 'http://localhost:4567/api';

export function createGoal(props){
  const request = axios.post(`${ROOT_URL}/goals`, props);
  return {
    type: CREATE_GOAL,
    payload: request
  }
}

export function fetchGoals(){
  const request = axios.post(`${ROOT_URL}/goals`);
  return { 
    type: FETCH_GOALS,
    payload: request
  }
}



export function getNotes(notes){
  console.log('get notes has been triggered');
  let request = axios.get(`${ROOT_URL}`);
  return {
    type: FIRST_ACTION,
    payload: request
  };
}

export function newNote(content) {
  console.log('new notes has been trigged');
  let reqObj = {
    data: content
  }
  let request = axios.post(`${ROOT_URL}`,reqObj);
  return {
    type: FIRST_ACTION,
    payload: request
  };

}