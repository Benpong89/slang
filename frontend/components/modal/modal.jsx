import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import ChannelFormContainer from "./channel_form_container";
import ChannelDetailContainer from "./channel_detail_container";
import DirectMessageDetailContainer from "./direct_message_detail_container";
import RoomDetailContainer from "./room_detail_container";

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
    case "detailDirectMessage":
      component = <DirectMessageDetailContainer />;
      break;
    case "roomDetail":
      component = <RoomDetailContainer />;
      break;
    default:
      return null;
  }

  if (modal === "roomDetail") {
    return (
      <div className="room-detail-background">
        <div className="room-detail-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
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
