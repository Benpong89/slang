import * as ApiUtil from '.././util/session_api_util.js'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
})

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = (user) => dispatch => (
  ApiUtil.signup(user)
  .then( user => (dispatch(receiveCurrentUser(user))),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  )));

export const signin = (user) => dispatch => (
  ApiUtil.signin(user)
  .then( user => (dispatch(receiveCurrentUser(user))),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  )));

export const signout = () => dispatch => (
  ApiUtil.signout()
  .then( user => dispatch(signoutCurrentUser()))
);
