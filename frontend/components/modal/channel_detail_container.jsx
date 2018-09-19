import { connect } from "react-redux";
import ChannelDetail from "./channel_detail.jsx";
import { createSubscription } from "../../actions/subscription_actions";
import { requestCurrentChannel } from "../../actions/channel_actions.js";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { channels },
  ui: { currentChannel }
}) => ({
  channels: Object.values(channels),
  currentChannel,
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestCurrentChannel: channelId =>
    dispatch(requestCurrentChannel(channelId)),
  closeModal: () => dispatch(closeModal()),
  createSubscription: subscription => dispatch(createSubscription(subscription))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
