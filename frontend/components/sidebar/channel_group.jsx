import React from "react";
import { Link } from "react-router-dom";

class ChannelGroup extends React.Component {
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

  setCurrentChannel(channel) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentChannel(channel.id);
    };
  }

  deleteSubscription(channelId) {
    return e => {
      e.preventDefault();
      const toDelete = Object.values(this.props.subscriptions).filter(
        subscription =>
          subscription.subscribeable_id === channelId &&
          subscription.user_id === this.props.currentUser.id
      );
      this.props.deleteSubscription(toDelete[0].id);
    };
  }

  componentDidMount() {
    this.props.requestCurrentChannel(1);
  }

  render() {
    if (this.props.subscriptions === undefined) return null;

    const currentUserSubscriptions = Object.values(
      this.props.subscriptions
    ).filter(
      subscription =>
        subscription.subscribeable_id === 1 ||
        subscription.user_id === this.props.currentUser.id
    );

    const channelIds = currentUserSubscriptions.map(
      channel => channel.subscribeable_id
    );

    const filteredChannels = this.props.channels.filter(channel =>
      channelIds.includes(channel.id)
    );

    const currentUserchannels = filteredChannels.map((channel, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentChannel(channel)}
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

export default ChannelGroup;
