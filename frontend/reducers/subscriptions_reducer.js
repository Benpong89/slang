import {
  RECEIVE_SUBSCRIPTION,
  RECEIVE_ALL_SUBSCRIPTIONS,
  REMOVE_SUBSCRIPTION
} from ".././actions/subscription_actions";
import { merge } from "lodash";

const subscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTION:
      let newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    case RECEIVE_ALL_SUBSCRIPTIONS:
      return merge({}, action.subscriptions);
    case REMOVE_SUBSCRIPTION:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default subscriptionsReducer;
