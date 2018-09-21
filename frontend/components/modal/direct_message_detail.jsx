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
      this.props.createDirectMessage(user.username);

      this.props.createSubscription({
        user_id: this.props.currentUser.id,
        subscribeable_id: this.props.direct_messages[
          this.props.direct_messages.length - 1
        ].id,
        subscribeable_type: "DirectMessage"
      });

      this.props.createSubscription({
        user_id: user.id,
        subscribeable_id: this.props.direct_messages[
          this.props.direct_messages.length - 1
        ].id,
        subscribeable_type: "DirectMessage"
      });
      this.props.requestAllDirectMessages();
      this.props.closeModal();
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

        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredUsers.map(user => {
          return (
            <div className="mail" key={user.id}>
              <button
                onClick={this.createDirectMessage(user)}
                className="channel-detail-li-name"
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
