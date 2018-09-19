import { connect } from "react-redux";
import ChannelDetail from "./channel_detail.jsx";
import {
  createChannel,
  requestAllChannels,
  requestCurrentChannel
} from "../../actions/channel_actions.js";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({
  entities: { channels },
  ui: { currentChannel }
}) => ({
  channels: Object.values(channels),
  currentChannel
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: channels => dispatch(requestAllChannels(channels)),
  requestCurrentChannel: channel => dispatch(requestCurrentChannel(channel)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
