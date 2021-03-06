import { connect } from "react-redux";
import DirectMessageGroup from "./direct_message_group.jsx";
import {
  receiveDirectMessage,
  requestAllDirectMessages,
  requestCurrentDirectMessage,
  deleteDirectMessage
} from "../../actions/direct_message_actions.js";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { direct_messages },
  entities: { subscriptions }
}) => {
  return {
    direct_messages: direct_messages,
    subscriptions: subscriptions,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  receiveDirectMessage: data => dispatch(receiveDirectMessage(data)),
  requestAllDirectMessages: direct_messages =>
    dispatch(requestAllDirectMessages(direct_messages)),
  openModal: modal => dispatch(openModal(modal)),
  deleteDirectMessage: direct_message =>
    dispatch(deleteDirectMessage(direct_message)),
  requestCurrentDirectMessage: direct_message =>
    dispatch(requestCurrentDirectMessage(direct_message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageGroup);
