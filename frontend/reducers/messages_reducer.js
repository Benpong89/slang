import {
  RECEIVE_MESSAGE,
  RECEIVE_ALL_MESSAGES
} from ".././actions/message_actions";
import { merge } from "lodash";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const newState = merge({}, state);
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_ALL_MESSAGES:
      return merge({}, action.messages);
    default:
      return state;
  }
};

export default messagesReducer;
