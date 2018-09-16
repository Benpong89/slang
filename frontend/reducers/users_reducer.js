import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ALL_USERS
} from ".././actions/session_actions.js";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};

export default usersReducer;
