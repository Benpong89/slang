import {
  RECEIVE_MESSAGE,
  RECEIVE_ALL_MESSAGES,
  REMOVE_MESSAGE
} from ".././actions/message_actions";
import { merge } from "lodash";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      let newState = merge({}, state);
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_ALL_MESSAGES:
      return merge({}, action.messages);
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
