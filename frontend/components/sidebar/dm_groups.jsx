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
    //this code filters out all the subscriptions and only returns the subscriptions of the current user
    const currentUserSubscriptions = Object.values(
      this.props.subscriptions
    ).filter(
      subscription => subscription.user_id === this.props.currentUser.id
    );

    //these two blocks of code returns all the subscriptions that other users have to the current user's channel
    const currentUserChannel = this.props.channels.filter(
      channel => channel.name === this.props.currentUser.username
    );
    if (currentUserChannel.length === 0) return null;
    const subscribedToCurrentUser = Object.values(
      this.props.subscriptions
    ).filter(
      subscription => subscription.subscribeable_id === currentUserChannel[0].id
    );

    const otherUsersIds = subscribedToCurrentUser.map(
      subscription => subscription.user_id
    );

    const otherUsers = this.props.users
      .filter(user => otherUsersIds.includes(user.id))
      .map(user => user.username);

    const otherUserChannelIds = this.props.channels
      .filter(channel => otherUsers.includes(channel.name))
      .map(channel => channel.id);

    //this code maps through the combined subscriptions and only returns the subscribeable_ids as an array
    const currentUserIds = currentUserSubscriptions.map(
      subscription => subscription.subscribeable_id
    );

    const combinedIds = currentUserIds.concat(otherUserChannelIds);
    //this code takes all the channels the user is subscribed to and filters out the DM's
    const filteredChannels = this.props.channels.filter(
      channel =>
        combinedIds.includes(channel.id) && channel.description === "DM"
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
        <ul className="conversation-ul">{currentUserchannels}</ul>
      </div>
    );
  }
}

export default DMGroups;
