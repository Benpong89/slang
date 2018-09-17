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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = merge({}, this.state);
    this.props.createChannel(channel);
  }

  render() {
    const channels = this.props.channels.map((channel, idx) => {
      return (
        <li key={idx} className="conversation-li">
          # {channel}
        </li>
      );
    });

    return (
      <div className="conversation-container">
        Channels
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="channel name goes here"
          />
          <button type="submit" className="create_new_channel">
            +
          </button>
        </form>
        <ul className="conversation-ul">{channels}</ul>
      </div>
    );
  }
}

export default ChannelGroups;
