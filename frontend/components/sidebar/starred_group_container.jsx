import { connect } from "react-redux";
import { requestAllSubscriptions } from "../../actions/subscription_actions";
import { requestCurrentDirectMessage } from "../../actions/direct_message_actions.js";
import { requestCurrentchannel } from "../../actions/channel_actions.js";
import StarredGroup from "./starred_group.jsx";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { subscriptions },
  entities: { channels },
  entities: { direct_messages }
}) => {
  return {
    currentUser: users[session.id],
    subscriptions: Object.values(subscriptions),
    channels: Object.values(channels),
    direct_messages: Object.values(direct_messages)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllSubscriptions: subscriptions =>
    dispatch(requestAllSubscriptions(subscriptions)),
  openModal: modal => dispatch(openModal(modal)),
  requestCurrentChannel: channel => dispatch(requestCurrentChannel(channel)),
  requestCurrentDirectMessage: direct_message =>
    dispatch(requestCurrentDirectMessage(direct_message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarredGroup);
