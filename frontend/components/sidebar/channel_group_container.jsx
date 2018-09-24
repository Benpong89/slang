import { connect } from "react-redux";
import ChannelGroup from "./channel_group.jsx";
import {
  requestAllChannels,
  requestCurrentChannel
} from "../../actions/channel_actions.js";
import { deleteSubscription } from "../../actions/subscription_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { channels },
  entities: { subscriptions },
  ui: { currentChannel }
}) => ({
  channels: Object.values(channels),
  subscriptions: subscriptions,
  currentChannel,
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: channels => dispatch(requestAllChannels(channels)),
  requestCurrentChannel: channel => dispatch(requestCurrentChannel(channel)),
  openModal: modal => dispatch(openModal(modal)),
  deleteSubscription: subscription => dispatch(deleteSubscription(subscription))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelGroup);
