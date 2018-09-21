import React from "react";
import { merge } from "lodash";
import { receiveMessage } from "../../actions/message_actions";

class AddMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      messageable_type: this.props.currentChannel[0].type,
      messageable_id: this.props.currentChannel[0]
    };

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
    const message = {
      body: this.state.body,
      author_id: this.props.currentUser.id,
      messageable_type: this.props.currentChannel[0].type,
      messageable_id: this.props.currentChannel[0].id
    };
    App.cable.subscriptions.subscriptions[0].speak(message);

    this.setState({
      body: "",
      author_id: this.props.currentUser.id,
      messageable_type: this.props.currentChannel[0].type,
      messageable_id: this.props.currentChannel[0].id,
      currentChannel: this.props.currentChannel[0]
    });
  }

  render() {
    return (
      <div className="messages_submit_container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="your message goes here"
            className="message-input"
          />
          <button type="submit" className="message-submit" />
        </form>
      </div>
    );
  }
}

export default AddMessageForm;
