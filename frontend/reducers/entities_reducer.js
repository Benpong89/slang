import { combineReducers } from "redux";
import users from "./users_reducer";
import messages from "./messages_reducer";
import channels from "./channels_reducer";
import subscriptions from "./subscriptions_reducer";
import modal from "./modal_reducer";

export default combineReducers({
  users,
  messages,
  channels,
  subscriptions,
  modal
});
