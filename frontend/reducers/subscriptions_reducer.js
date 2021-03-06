import {
  RECEIVE_SUBSCRIPTION,
  RECEIVE_ALL_SUBSCRIPTIONS,
  REMOVE_SUBSCRIPTION
} from ".././actions/subscription_actions";
import { RECEIVE_DIRECTMESSAGE } from ".././actions/direct_message_actions";
import { RECEIVE_CHANNEL } from ".././actions/channel_actions";
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
    case RECEIVE_DIRECTMESSAGE:
      newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    default:
      return state;
  }
};

export default subscriptionsReducer;
