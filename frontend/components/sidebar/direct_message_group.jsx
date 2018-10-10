import React from "react";
// import { receiveMessage } from "../../actions/message_actions";
// import { receiveDirectMessage } from "../../actions/direct_message_actions";
import { Link } from "react-router-dom";

class DirectMessageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestAllDirectMessages();
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openDetailModal = this.openDetailModal.bind(this);
    this.setCurrentDirectMessage = this.setCurrentDirectMessage.bind(this);
    this.deleteDirectMessage = this.deleteDirectMessage.bind(this);
  }

  openCreateModal(e) {
    e.preventDefault();
    this.props.openModal("createDirectMessage");
  }

  openDetailModal(e) {
    e.preventDefault();
    this.props.openModal("detailDirectMessage");
  }

  deleteDirectMessage(direct_message) {
    return e => {
      e.preventDefault();
      this.props.deleteDirectMessage(direct_message.id);
    };
  }

  setCurrentDirectMessage(direct_message) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentDirectMessage(direct_message.id);
    };
  }

  render() {
    let currentUserDirectMessages;
    if (
      this.props.subscriptions === undefined ||
      Object.values(this.props.direct_messages).length === 0
    ) {
      currentUserDirectMessages = [];
    } else {
      const currentUserSubscriptions = Object.values(
        this.props.subscriptions
      ).filter(
        subscription =>
          subscription.user_id === this.props.currentUser.id &&
          subscription.subscribeable_type === "DirectMessage"
      );
      currentUserDirectMessages = currentUserSubscriptions.map(
        subscription =>
          this.props.direct_messages[subscription.subscribeable_id]
      );
    }

    //needs to remove null direct messages from array after they've been deleted
    const currentDirectMessages = currentUserDirectMessages.filter(n => n);
    const listUsernames = currentDirectMessages.map((direct_message, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentDirectMessage(direct_message)}
            className="conversation-li"
          >
            {direct_message.names.filter(
              name => name !== this.props.currentUser.username
            )}
          </button>
          <button
            onClick={this.deleteDirectMessage(direct_message)}
            className="channel_detail_button"
          >
            {"\u2296"}
          </button>
        </li>
      );
    });

    return (
      <div className="conversation-container">
        <button
          onClick={this.openDetailModal}
          className="channel_detail_button"
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

export default DirectMessageGroup;

// const currentUserDirectMessages = this.props.direct_messages.filter(
//   direct_message =>
//     direct_message.names.includes(this.props.currentUser.username)
// );

// const currentUserDirectMessages = this.props.direct_messages.filter(
//   direct_message => {
//     let userIds = direct_message.subs.map(
//       subscription => subscription.user_id
//     );
//     return userIds.includes(this.props.currentUser.id);
//   }
// );

// const directMessageIds = Object.values(this.props.subscriptions).map(
//   subscription => subscription.subscribeable_id ===
// );

// const listUsernames = currentUserDirectMessages.map(
//   (direct_message, idx) => {
//     return (
//       <li key={idx}>
//         <button
//           onClick={this.setCurrentDirectMessage(direct_message)}
//           className="conversation-li"
//         >
//           # {direct_message.names[0]}
//         </button>
//         <button
//           onClick={this.deleteSubscription(direct_message)}
//           className="channel_detail_button"
//         >
//           {"\u2296"}
//         </button>
//       </li>
//     );
//   }
// );
