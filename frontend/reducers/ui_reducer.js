import { combineReducers } from "redux";

import currentRoom from "./current_room_reducer";
import modal from "./modal_reducer";

export default combineReducers({
  currentRoom,
  modal
});
