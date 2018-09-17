import {
  RECEIVE_CHANNEL,
  RECEIVE_ALL_CHANNELS
} from ".././actions/channel_actions";
import { merge } from "lodash";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const newState = merge({}, state);
      newState[action.channel.id] = action.channel;
      return newState;
    case RECEIVE_ALL_CHANNELS:
      return merge({}, action.channels);
    default:
      return state;
  }
};

export default channelsReducer;
