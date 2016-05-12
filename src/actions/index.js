import axios from 'axios';

export const CREATE_GOAL = 'CREATE_GOAL';
export const FETCH_GOALS = 'FETCH_GOALS';

const ROOT_URL = //TODO need end point for database post/get requests

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