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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
  }

  componentDidMount() {
    this.props.requestAllChannels();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.openModal("createChannel");
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
        Channels
        <button onClick={this.handleSubmit} className="create_new_channel">
          {"\u2295"}
        </button>
        <ul className="conversation-ul">{channels}</ul>
      </div>
    );
  }
}

export default ChannelGroups;
