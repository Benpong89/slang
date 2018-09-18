import { connect } from "react-redux";
import ChannelGroups from "./channel_groups.jsx";
import {
  createChannel,
  requestAllChannels,
  requestCurrentChannel
} from "../../actions/channel_actions.js";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  entities: { channels },
  ui: { currentChannel }
}) => ({
  channels: Object.values(channels),
  currentChannel
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  requestAllChannels: channels => dispatch(requestAllChannels(channels)),
  requestCurrentChannel: channel => dispatch(requestCurrentChannel(channel)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelGroups);
