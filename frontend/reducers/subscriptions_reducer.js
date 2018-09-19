import {
  RECEIVE_SUBSCRIPTION,
  RECEIVE_ALL_SUBSCRIPTIONS
} from ".././actions/subscription_actions";
import { merge } from "lodash";

const subscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTION:
      const newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    case RECEIVE_ALL_SUBSCRIPTIONS:
      return merge({}, action.subscriptions);
    default:
      return state;
  }
};

export default subscriptionsReducer;
