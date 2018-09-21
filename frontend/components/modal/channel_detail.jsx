import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["name", "description"];

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  setCurrentChannel(channelId) {
    return e => {
      e.preventDefault();
      this.props.createSubscription({
        user_id: this.props.currentUser.id,
        subscribeable_id: channelId,
        subscribeable_type: "Channel"
      });
      this.props.requestCurrentChannel(channelId);
      this.props.closeModal();
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const filteredDMs = this.props.channels.filter(
      channel => channel.description != "DM"
    );

    const filteredChannels = filteredDMs.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div className="modal-channel-container">
        <button className="x-button" onClick={this.props.closeModal}>
          {"\u24e7"}
        </button>
        <h1 className="channel_modal_title">Check out one of our Channels!</h1>
        <SearchInput className="searchInput" onChange={this.searchUpdated} />

        {filteredChannels.map(channel => {
          return (
            <div className="mail" key={channel.id}>
              <button
                onClick={this.setCurrentChannel(channel.id)}
                className="channel-detail-li-name"
              >
                # {channel.name}
              </button>
              <div className="channel-detail-li-description">
                {channel.description}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChannelDetail;
