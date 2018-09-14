import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import message from './message_errors_reducer';

export default combineReducers({
  session,
  message,
});
