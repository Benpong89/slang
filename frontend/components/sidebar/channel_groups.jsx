import React from "react";
import { Link } from "react-router-dom";

class ChannelGroups extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestAllChannels();
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openDetailModal = this.openDetailModal.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.deleteSubscription = this.deleteSubscription.bind(this);
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

  deleteSubscription(channelId) {
    return e => {
      e.preventDefault();
      const toDelete = Object.values(this.props.subscriptions).filter(
        subscription => subscription.subscribeable_id === channelId
      );

      this.props.deleteSubscription(toDelete[0].id);
    };
  }

  render() {
    if (this.props.subscriptions === undefined) return null;

    const channelIds = Object.values(this.props.subscriptions).map(
      channel => channel.subscribeable_id
    );

    const filteredChannels = this.props.channels.filter(
      channel => channelIds.includes(channel.id) && channel.description !== "DM"
    );

    const currentUserchannels = filteredChannels.map((channel, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentChannel(channel.id)}
            className="conversation-li"
          >
            # {channel.name}
          </button>
          <button
            onClick={this.deleteSubscription(channel.id)}
            className={
              "channel_delete_button" +
              (channel.name === "general" ? " hidden" : "")
            }
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
          Channels
        </button>
        <button onClick={this.openCreateModal} className="create_new_channel">
          {"\u2295"}
        </button>
        <ul className="conversation-ul">{currentUserchannels}</ul>
      </div>
    );
  }
}

export default ChannelGroups;
