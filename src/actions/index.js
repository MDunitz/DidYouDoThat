import axios from 'axios'

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