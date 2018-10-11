import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["username"];

class DirectMessageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.searchUpdated = this.searchUpdated.bind(this);
    this.createDirectMessage = this.createDirectMessage.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  createDirectMessage(user) {
    return e => {
      e.preventDefault();

      const pairUsernames = this.props.direct_messages.map(
        currentUserDirectMessage => currentUserDirectMessage.names
      );

      if (
        pairUsernames
          .map(pairUsername => pairUsername.includes(user.username))
          .includes(true)
      ) {
        this.props.closeModal();
        return null;
      } else {
        const pairUserIds = [this.props.currentUser.id, user.id];
        const socket_direct_message = {
          pairUserIds: pairUserIds,
          socket_type: "direct_message"
        };
        // App.cable.subscriptions.subscriptions[0].speak(message);
        App.cable.subscriptions.subscriptions[0].speak(socket_direct_message);
        // this.props.createDirectMessage(user.id);
        this.props.closeModal();
      }
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const filteredUsers = this.props.users.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div className="modal-channel-container">
        <button className="x-button" onClick={this.props.closeModal}>
          {"\u24e7"}
        </button>

        <h1 className="channel_modal_title">Livechat with a friend!</h1>

        <SearchInput className="searchInput" onChange={this.searchUpdated} />
        {filteredUsers.map(user => {
          return (
            <div className="mail" key={user.id}>
              <button
                onClick={this.createDirectMessage(user)}
                className={
                  "channel-detail-li-name" +
                  (user.username === this.props.currentUser.username
                    ? " hidden"
                    : "")
                }
              >
                # {user.username}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DirectMessageDetail;
