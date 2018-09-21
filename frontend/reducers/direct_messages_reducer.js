import {
  RECEIVE_DIRECTMESSAGE,
  RECEIVE_ALL_DIRECTMESSAGES
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
    default:
      return state;
  }
};

export default direct_messagesReducer;
