import React from "react";
import { Link } from "react-router-dom";

class DirectMessageGroups extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestAllDirectMessages();
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openDetailModal = this.openDetailModal.bind(this);
    this.setCurrentDirectMessage = this.setCurrentDirectMessage.bind(this);
    this.deleteSubscription = this.deleteSubscription.bind(this);
  }

  openCreateModal(e) {
    e.preventDefault();
    this.props.openModal("createDirectMessage");
  }

  openDetailModal(e) {
    e.preventDefault();
    this.props.openModal("detailDirectMessage");
  }

  deleteSubscription(direct_messageId) {
    return e => {
      e.preventDefault();
    };
  }

  setCurrentDirectMessage(direct_message) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentDirectMessage(direct_message.id);
    };
  }

  render() {
    if (this.props.direct_messages.length === 0) return null;
    const currentUserDirectMessages = this.props.direct_messages.filter(
      direct_message =>
        direct_message.names.includes(this.props.currentUser.username)
    );

    const otherUsernames = currentUserDirectMessages.map(direct_message =>
      direct_message.names.filter(
        username => username != this.props.currentUser.username
      )
    )[0][0];

    const listUsernames = currentUserDirectMessages.map(
      (direct_message, idx) => {
        return (
          <li key={idx}>
            <button
              onClick={this.setCurrentDirectMessage(direct_message)}
              className="conversation-li"
            >
              # {otherUsernames}
            </button>
            <button
              onClick={this.deleteSubscription(direct_message.id)}
              className="channel_detail_button"
            >
              {"\u2296"}
            </button>
          </li>
        );
      }
    );

    return (
      <div className="conversation-container">
        <button
          onClick={this.openDetailModal}
          className="direct_message_detail_button"
        >
          Direct Messages
        </button>
        <button onClick={this.openDetailModal} className="create_new_dm">
          {"\u2295"}
        </button>
        <ul className="conversation-ul">{listUsernames}</ul>
      </div>
    );
  }
}

export default DirectMessageGroups;
