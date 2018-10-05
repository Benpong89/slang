import { RECEIVE_CURRENT_CHANNEL } from ".././actions/channel_actions";
import { RECEIVE_CURRENT_DIRECTMESSAGE } from ".././actions/direct_message_actions";
// import { RECEIVE_MESSAGE } from ".././actions/message_actions";
import { merge } from "lodash";

const default_state = {
  1: {
    id: 1,
    name: "general",
    description: "default channel",
    type: "Channel",
    subs: [1]
  }
};

const currentRoomReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return merge({}, { [action.channel.id]: action.channel });
    case RECEIVE_CURRENT_DIRECTMESSAGE:
      return merge({}, { [action.direct_message.id]: action.direct_message });
    default:
      return state;
  }
};

export default currentRoomReducer;
