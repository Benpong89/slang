import { ADD_MESSAGE, RECEIVE_MESSAGE } from '.././actions/message_actions';

const messagesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_MESSAGE:
    case RECEIVE_MESSAGE:
    default:
      return state;
  }
};

export default messagesReducer;
