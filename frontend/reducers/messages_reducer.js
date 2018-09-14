import { ADD_MESSAGE, SET_MESSAGES } from '.././actions/message_actions';
import { merge } from 'lodash'

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_MESSAGE:
      return merge({}, state, action.message)
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;
