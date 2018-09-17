import { connect } from "react-redux";
import ChannelGroups from "./channel_groups.jsx";
import { createChannel } from "../../actions/channel_actions.js";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelGroups);
