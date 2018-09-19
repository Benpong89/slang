import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class ChannelGroups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };

    this.props.requestAllChannels();
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openDetailModal = this.openDetailModal.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  openCreateModal(e) {
    e.preventDefault();
    this.props.openModal("createChannel");
  }

  openDetailModal(e) {
    e.preventDefault();
    this.props.openModal("detailChannel");
  }

  setCurrentChannel(channelId) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentChannel(channelId);
    };
  }

  render() {
    const channels = this.props.channels.map((channel, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentChannel(channel.id)}
            className="conversation-li"
          >
            # {channel.name}
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
          Channels
        </button>
        <button onClick={this.openCreateModal} className="create_new_channel">
          {"\u2295"}
        </button>
        <ul className="conversation-ul">{channels}</ul>
      </div>
    );
  }
}

export default ChannelGroups;
