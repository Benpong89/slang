// import * as APIUtil from '../util/session_api_util';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';


export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});
