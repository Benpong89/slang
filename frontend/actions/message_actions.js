import * as MessagesAPIUtil from "../util/messages_api_util";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const deleteMessage = id => dispatch =>
  MessagesAPIUtil.deleteMessage(id).then(message =>
    dispatch(removeMessage(id))
  );

export const createMessage = message => dispatch =>
  MessagesAPIUtil.createMessage(message);

export const requestMessage = message => dispatch =>
  MessagesAPIUtil.fetchMessage(message).then(message =>
    dispatch(receiveMessage(message))
  );

export const requestAllMessages = () => dispatch =>
  MessagesAPIUtil.fetchAllMessages().then(messages =>
    dispatch(receiveAllMessages(messages))
  );
