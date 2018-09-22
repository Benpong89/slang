import {
  RECEIVE_DIRECTMESSAGE,
  RECEIVE_ALL_DIRECTMESSAGES,
  REMOVE_DIRECTMESSAGE
} from ".././actions/direct_message_actions";
import { merge } from "lodash";

const direct_messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DIRECTMESSAGE:
      let newState = merge({}, state);
      newState[action.direct_message.id] = action.direct_message;
      return newState;
    case RECEIVE_ALL_DIRECTMESSAGES:
      return merge({}, action.direct_messages);
    case REMOVE_DIRECTMESSAGE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default direct_messagesReducer;
