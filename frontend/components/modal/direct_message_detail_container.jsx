import { connect } from "react-redux";
import DirectMessageDetail from "./direct_message_detail.jsx";
import { createSubscription } from "../../actions/subscription_actions";
import { requestAllDirectMessages } from "../../actions/direct_message_actions.js";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { direct_messages },
  ui: { currentDirectMessages }
}) => ({
  direct_messages: Object.values(direct_messages),
  currentUser: users[session.id],
  users: Object.values(users)
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createSubscription: subscription =>
    dispatch(createSubscription(subscription)),
  requestAllDirectMessages: direct_messages =>
    dispatch(requestAllDirectMessages(direct_messages))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageDetail);
