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

  deleteSubscription(direct_message) {
    return e => {
      e.preventDefault();
      const toDelete = Object.values(this.props.subscriptions).filter(
        subscription => subscription.subscribeable_id === direct_message.id
      );
      if (toDelete[0] === undefined) return null;
      this.props.deleteSubscription(toDelete[0].id);
      if (toDelete[1] === undefined) return null;
      this.props.deleteSubscription(toDelete[1].id);
    };
  }

  setCurrentDirectMessage(direct_message) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentDirectMessage(direct_message.id);
    };
  }

  ComponentDidMount() {
    if (this.props.direct_messages.length === 0) return null;
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

    // let currentChannel;
    //
    // if (typeof this.props.currentChannel[0].name === "string") {
    //   currentChannel = this.props.currentChannel[0].name;
    // } else {
    //   const names = this.props.currentChannel[0].names;
    //   currentChannel = names.filter(
    //     name => name !== this.props.currentUser.username
    //   );
    // }

    const listUsernames = currentUserDirectMessages.map(
      (direct_message, idx) => {
        return (
          <li key={idx}>
            <button
              onClick={this.setCurrentDirectMessage(direct_message)}
              className="conversation-li"
            >
              #{" "}
              {direct_message.names.filter(
                name => name !== this.props.currentUser.username
              )}
            </button>
            <button
              onClick={this.deleteSubscription(direct_message)}
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

export default DirectMessageGroups;

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
