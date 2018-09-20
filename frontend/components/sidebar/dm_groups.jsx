import React from "react";
import { Link } from "react-router-dom";

class DMGroups extends React.Component {
  constructor(props) {
    super(props);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openDetailModal = this.openDetailModal.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.deleteSubscription = this.deleteSubscription.bind(this);
  }

  openCreateModal(e) {
    e.preventDefault();
    this.props.openModal("createDM");
  }

  openDetailModal(e) {
    e.preventDefault();
    this.props.openModal("detailDM");
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
      channel => channelIds.includes(channel.id) && channel.description === "DM"
    );

    const uniqueChannels = filteredChannels;

    const currentUserchannels = uniqueChannels.map((channel, idx) => {
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
            className="channel_detail_button"
          >
            {"\u2296"}
          </button>
        </li>
      );
    });
    // onClick={this.openDetailModal}
    // onClick={this.openDetailModal}
    return (
      <div className="conversation-container">
        <button className="channel_detail_button">Direct Messages</button>
        <button className="create_new_dm">{"\u2295"}</button>
        <ul className="conversation-ul">{currentUserchannels}</ul>
      </div>
    );
  }
}

export default DMGroups;
