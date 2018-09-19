import { connect } from "react-redux";
import MessagesList from "./messages_list.jsx";
import {
  requestAllMessages,
  deleteMessage
} from "../../actions/message_actions.js";
import { requestAllUsers } from "../../actions/session_actions.js";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { messages },
  ui: { currentChannel }
}) => ({
  users,
  currentChannel: Object.values(currentChannel),
  messages: Object.values(messages)
});

const mapDispatchToProps = dispatch => ({
  requestAllMessages: messages => dispatch(requestAllMessages(messages)),
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  deleteMessage: message => dispatch(deleteMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
