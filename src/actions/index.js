
import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  CREATE_GOAL, 
  FETCH_GOALS, 
  AUTH_USER, 
  AUTH_ERROR, 
  UNAUTH_USER, 
  FETCH_MESSAGE,
  DAILY_REVIEW 
} from './types';



const ROOT_URL_SIGNIN = 'http://localhost:3090'
const ROOT_URL_DB = 'http://localhost:3000/api'

export function signinUser({email, password}){
//call dispatch and pass in an action === calling that actions's action creator and returning a plain object as an action
  return function(dispatch){
    axios.post(`${ROOT_URL_SIGNIN}/signin`, { email, password })
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
    axios.post(`${ROOT_URL_SIGNIN}/signup`, { email, password })
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
    axios.get(ROOT_URL_DB, { //second argument to axios is the options object, can pass in headers
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
  const request = axios.post(`${ROOT_URL_DB}/goals`, props);
  return {
    type: CREATE_GOAL,
    payload: request
  }
}

export function fetchGoals(){
  //TODO add userID
  console.log('fetching goals');
  const request = axios.get(`${ROOT_URL_DB}/goals`);
  return { 
    type: FETCH_GOALS,
    payload: request
  };
}

export function dailyReview(){
  console.log('posting daily review data');
  const request = axios.post(`${ROOT_URL_DB}/taskData`);
  return{
    type: DAILY_REVIEW,
    payload: request
  }
}

// export const FIRST_ACTION = 'NOTES';

// export function getNotes(notes){
//   console.log('get notes has been triggered');
//   let url = 'http://localhost:4567/api';
//   let request = axios.get(url);
//   return {
//     type: FIRST_ACTION,
//     payload: request
//   };
// }

// export function newNote(content) {
//   console.log('new notes has been trigged');
//   let url = 'http://localhost:4567/api';
//   let reqObj = {
//     data: content
//   }
//   let request = axios.post(url,reqObj);
//   return {
//     type: FIRST_ACTION,
//     payload: request
//   };





