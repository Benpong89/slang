import { connect } from "react-redux";
import MessagesList from "./messages_list.jsx";
import {
  requestAllMessages,
  deleteMessage
} from "../../actions/message_actions.js";
import { requestAllUsers } from "../../actions/session_actions.js";
import {
  createSubscription,
  updateSubscription
} from "../../actions/subscription_actions";
import { requestCurrentDirectMessage } from "../../actions/direct_message_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { messages },
  entities: { channels },
  ui: { currentRoom }
}) => ({
  users,
  currentUser: users[session.id],
  channels: Object.values(channels),
  currentRoom: Object.values(currentRoom),
  messages: Object.values(messages)
});

const mapDispatchToProps = dispatch => ({
  requestAllMessages: messages => dispatch(requestAllMessages(messages)),
  requestAllUsers: users => dispatch(requestAllUsers(users)),
  deleteMessage: message => dispatch(deleteMessage(message)),
  requestCurrentDirectMessage: id => dispatch(requestCurrentDirectMessage(id)),
  createSubscription: subscription =>
    dispatch(createSubscription(subscription)),
  updateSubscription: subscription =>
    dispatch(updateSubscription(subscription)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
