import { connect } from "react-redux";
import React from "react";
import RoomDetail from "./room_detail.jsx";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ entities: { channels }, ui: { currentRoom } }) => ({
  channels: Object.keys(channels).map(id => channels[id].name),
  currentRoom: Object.values(currentRoom)
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDetail);
