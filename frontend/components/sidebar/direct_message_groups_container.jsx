import { connect } from "react-redux";
import DirectMessageGroups from "./direct_message_groups.jsx";
import {
  requestAllDirectMessages,
  requestCurrentDirectMessage
} from "../../actions/direct_message_actions.js";
import { deleteSubscription } from "../../actions/subscription_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { direct_messages },
  entities: { subscriptions }
}) => ({
  direct_messages: Object.values(direct_messages),
  subscriptions: subscriptions,
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestAllDirectMessages: direct_messages =>
    dispatch(requestAllDirectMessages(direct_messages)),
  openModal: modal => dispatch(openModal(modal)),
  deleteSubscription: subscription =>
    dispatch(deleteSubscription(subscription)),
  requestCurrentDirectMessage: direct_message =>
    dispatch(requestCurrentDirectMessage(direct_message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageGroups);
