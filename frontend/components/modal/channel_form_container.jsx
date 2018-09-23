import { connect } from "react-redux";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import ChannelForm from "./channel_form";
import {
  createChannel,
  requestAllChannels
} from "../../actions/channel_actions.js";

const mapStateToProps = ({ errors, entities: { channels } }) => {
  return {
    errors: errors.session,
    formType: "createChannel",
    channels: Object.keys(channels).map(id => channels[id].name)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(createChannel(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>
        Create Channel
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    createChannel: channel => dispatch(createChannel(channel)),
    requestAllChannels: channels => dispatch(requestAllChannels(channels))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
