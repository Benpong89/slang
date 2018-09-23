import { combineReducers } from "redux";

import currentChannel from "./current_channel_reducer";
import modal from "./modal_reducer";

export default combineReducers({
  currentChannel,
  modal
});
