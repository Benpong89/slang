import * as MessagesAPIUtil from "../util/messages_api_util";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const createMessage = message => dispatch =>
  MessagesAPIUtil.createMessage(message);

export const requestMessage = message => dispatch =>
  MessagesAPIUtil.fetchMessage(message).then(
    message => dispatch(receiveMessage(message)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const requestAllMessages = () => dispatch =>
  MessagesAPIUtil.fetchAllMessages().then(messages =>
    dispatch(receiveAllMessages(messages))
  );
