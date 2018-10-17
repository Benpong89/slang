import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class RoomDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentWillUpdate() {
    this.props.closeModal();
  }

  render() {
    const currentRoomUsers = this.props.currentRoom[0].names.map(
      (usernames, idx) => {
        return (
          <li key={idx}>
            <img className="usericon-room" src={window.userIconURL} />
            {usernames}
          </li>
        );
      }
    );

    return (
      <div className="modal-room-container">
        <div className="room-detail-header">
          {this.props.currentRoom[0].names.length} Members
        </div>
        <ul className="room-detail-users-list">{currentRoomUsers}</ul>
        <button
          className="x-button-room-detail"
          onClick={this.props.closeModal}
        >
          {"\u24e7"}
        </button>
      </div>
    );
  }
}

export default RoomDetail;
