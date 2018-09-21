import * as DirectMessagesAPIUtil from "../util/direct_messages_api_util";
export const RECEIVE_DIRECTMESSAGE = "RECEIVE_DIRECTMESSAGE";
export const RECEIVE_ALL_DIRECTMESSAGES = "RECEIVE_ALL_DIRECTMESSAGES";
export const RECEIVE_CURRENT_DIRECTMESSAGE = "RECEIVE_CURRENT_DIRECTMESSAGE";

export const receiveDirectMessage = ({ direct_message, subscription }) => ({
  type: RECEIVE_DIRECTMESSAGE,
  direct_message,
  subscription
});

export const receiveCurrentDirectMessage = direct_message => ({
  type: RECEIVE_CURRENT_DIRECTMESSAGE,
  direct_message
});

export const receiveAllDirectMessages = direct_messages => ({
  type: RECEIVE_ALL_DIRECTMESSAGES,
  direct_messages
});

export const requestCurrentDirectMessage = id => dispatch =>
  DirectMessagesAPIUtil.fetchDirectMessage(id).then(currentDirectMessageId =>
    dispatch(receiveCurrentDirectMessage(currentDirectMessageId))
  );

export const createDirectMessage = userId => dispatch =>
  DirectMessagesAPIUtil.createDirectMessage(userId).then(payload =>
    dispatch(receiveDirectMessage(payload))
  );

export const requestDirectMessage = direct_message => dispatch =>
  DirectMessagesAPIUtil.fetchDirectMessage(direct_message).then(
    direct_message => dispatch(receiveDirectMessage(direct_message))
  );

export const requestAllDirectMessages = () => dispatch =>
  DirectMessagesAPIUtil.fetchAllDirectMessages().then(direct_messages =>
    dispatch(receiveAllDirectMessages(direct_messages))
  );
