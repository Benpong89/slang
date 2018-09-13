// import * as APIUtil from '../util/session_api_util';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';


export const addMessage = (author, body) => ({
  type: ADD_MESSAGE,
  author,
  body,
});

export const receiveMessage = (author, body) => ({
  type: RECEIVE_MESSAGE,
  author,
  body,
});
