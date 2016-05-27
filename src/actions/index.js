
import axios from 'axios';
import { CREATE_GOAL } from './types';
import { FETCH_GOALS } from './types';

//TODO need end point for database post/get requests
//const ROOT_URL = 

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

export const FIRST_ACTION = 'NOTES';

export function getNotes(notes){
  console.log('get notes has been triggered');
  let url = 'http://localhost:4567/api';
  let request = axios.get(url);
  return {
    type: FIRST_ACTION,
    payload: request
  };
}

export function newNote(content) {
  console.log('new notes has been trigged');
  let url = 'http://localhost:4567/api';
  let reqObj = {
    data: content
  }
  let request = axios.post(url,reqObj);
  return {
    type: FIRST_ACTION,
    payload: request
  };

}