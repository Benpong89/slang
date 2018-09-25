import { connect } from "react-redux";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import ChannelForm from "./channel_form";
import {
  createChannel,
  requestAllChannels
} from "../../actions/channel_actions.js";

const mapStateToProps = ({ entities: { channels } }) => ({
  channels: Object.keys(channels).map(id => channels[id].name)
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: channel => dispatch(createChannel(channel)),
  requestAllChannels: channels => dispatch(requestAllChannels(channels))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
