import { connect } from "react-redux";
import ChannelGroups from "./channel_groups.jsx";
import {
  createChannel,
  requestAllChannels
} from "../../actions/channel_actions.js";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ entities: { channels } }) => ({
  channels: Object.keys(channels).map(id => channels[id].name)
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  requestAllChannels: channels => dispatch(requestAllChannels(channels)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelGroups);
