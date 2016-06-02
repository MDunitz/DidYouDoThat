import axios from 'axios';
import { CREATE_GOAL } from './types';
import { FETCH_GOALS } from './types';

//TODO need end point for database post/get requests
const ROOT_URL = 'http://localhost:3090'

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