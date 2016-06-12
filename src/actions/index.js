import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  CREATE_GOAL, 
  FETCH_GOALS, 
  AUTH_USER, 
  AUTH_ERROR, 
  UNAUTH_USER, 
  FETCH_MESSAGE 
} from './types';



const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}){
//call dispatch and pass in an action === calling that actions's action creator and returning a plain object as an action
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //update state to indicate user is authenticated
        dispatch( { type: AUTH_USER });
        //save jwt to local storage
        localStorage.setItem('token', response.data.token);
        //TODO set route... redirect to route '/'
        browserHistory.push('/feature');
      })
      .catch((err)=>{
        console.log('error with post request to signin route', err);
        dispatch(authError('bad login info'));
      });
  }
}

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
      //TODO set route
      browserHistory.push('/feature');
    })
    .catch(response => dispatch(authError(response.data.error)))
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser(){
  localStorage.removeItem('token');
  return {type: UNAUTH_USER}
}

//TODO refactor out
export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, { //second argument to axios is the options object, can pass in headers
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.messagee
        });
      });
  }
}

export function createGoal(props){
  console.log('creating a goal?', props)
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