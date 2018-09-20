import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class ChannelForm extends React.Component {
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
    this.props.closeModal();
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
      <div className="modal-channel-container">
        <button className="x-button" onClick={this.props.closeModal}>
          {"\u24e7"}
        </button>
        <h1 className="channel_modal_title">Create a channel</h1>
        <p className="channel_modal_title_message">
          Channels are where your members communicate. They are best when
          organized around a topic.
        </p>

        <div className="channel_input_title_modal">Name</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="#channel"
            className="signin-input-modal"
          />
          <div className="input_post_message">What's this channel name?</div>

          <div className="channel_input_title_modal">Purpose</div>
          <div className="optional-modal">(optional)</div>
          <input
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            className="signin-input-modal"
          />
          <div className="input_post_message">What's this channel about?</div>
          <button type="submit" className="new_channel_button_modal">
            Create channel
          </button>
        </form>
      </div>
    );
  }
}

export default ChannelForm;
