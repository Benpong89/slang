import { connect } from "react-redux";
import React from "react";
import { createChannel } from "../../actions/channel_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ChannelForm from "./channel_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "createChannel"
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
