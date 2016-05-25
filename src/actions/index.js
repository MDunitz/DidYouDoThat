import axios from 'axios'

export const FIRST_ACTION = 'NOTES';

export function getNotes(notes){
  console.log('get notes has been triggered');
  let url = 'http://localhost:4567/api';
  const request = axios.get(url);
  return {
    type: FIRST_ACTION,
    payload: request
  };

}