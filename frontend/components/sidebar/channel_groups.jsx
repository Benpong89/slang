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
    this.props.openModal("createChannel");
  }
  // This works for channel link, but empty page. How to create a new blank chatbox for each link??
  // <Link to={`/${channel}`}

  render() {
    const channels = this.props.channels.map((channel, idx) => {
      return (
        <li>
          <Link to="/main" key={idx} className="conversation-li">
            # {channel}
          </Link>
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
