import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import ChannelFormContainer from "./channel_form_container";
import ChannelDetailContainer from "./channel_detail_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "createChannel":
      component = <ChannelFormContainer />;
      break;
    case "detailChannel":
      component = <ChannelDetailContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.entities.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
