import React from "react";
import { Link } from "react-router-dom";

class StarredGroup extends React.Component {
  constructor(props) {
    super(props);

    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.setCurrentDirectMessage = this.setCurrentDirectMessage.bind(this);
  }

  setCurrentChannel(channel) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentChannel(channel.id);
    };
  }

  setCurrentDirectMessage(direct_message) {
    return e => {
      e.preventDefault();
      this.props.requestCurrentDirectMessage(direct_message.id);
    };
  }

  render() {
    const currUserFavSubs = this.props.subscriptions.filter(
      sub => sub.favicon === true && sub.user_id === this.props.currentUser.id
    );

    const favChannelSubs = currUserFavSubs
      .filter(sub => sub.subscribeable_type === "Channel")
      .map(sub => sub.subscribeable_id);

    const favChannelNames = this.props.channels.filter(channel =>
      favChannelSubs.includes(channel.id)
    );

    const favChannelList = favChannelNames.map((channel, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentChannel(channel)}
            className="conversation-li"
          >
            # {channel.name}
          </button>
        </li>
      );
    });

    // const favChannelNames = this.props.channels.find(channel => channel.id === sub.subscription_id)

    const favDirectMessageSubs = currUserFavSubs
      .filter(sub => sub.subscribeable_type === "DirectMessage")
      .map(sub => sub.subscribeable_id);

    const favDirectMessageNames = this.props.direct_messages.filter(dm =>
      favDirectMessageSubs.includes(dm.id)
    );

    const favDirectMessageList = favDirectMessageNames.map(
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
          </li>
        );
      }
    );

    return (
      <div className="conversation-container">
        <button className="channel_detail_button">Favorites</button>
        <ul className="conversation-ul">{favChannelList}</ul>
        <ul className="conversation-ul">{favDirectMessageList}</ul>
      </div>
    );
  }
}

export default StarredGroup;

// const favChannels = this.props.channels.filter(channel => {
//
// })
//
// // const favChannels = currUserFavSubs.filter(
// //   subscription => subscription.subscribeable_type === "Channel"
// // );
//
// //Separate by channel and DMs and then print out the right name. DM is user name, Ch is name.
//
// const filteredChannels = this.props.channels.filter(channel =>
//   channelIds.includes(channel.id)
// );

//Now that I have all the current user favorite subscriptions, need to
//then list them out by channel or DM room name.
