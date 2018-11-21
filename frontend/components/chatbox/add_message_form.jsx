import React from "react";
import { merge } from "lodash";
import { receiveMessage } from "../../actions/message_actions";
import { emojify } from "react-emojione";
import EmojiPicker from "emoji-picker-react";

class AddMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      messageable_type: this.props.currentRoom[0].type,
      messageable_id: this.props.currentRoom[0],
      emojiLibary: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEmoji = this.toggleEmoji.bind(this);
    this.emojiParser = this.emojiParser.bind(this);
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
      messageable_type: this.props.currentRoom[0].type,
      messageable_id: this.props.currentRoom[0].id
    };

    if (/\S/.test(message.body)) {
      const socket_message = { message: message, socket_type: "message" };
      App.cable.subscriptions.subscriptions[0].speak(socket_message);
    }

    this.setState({
      body: "",
      author_id: this.props.currentUser.id,
      messageable_type: this.props.currentRoom[0].type,
      messageable_id: this.props.currentRoom[0].id,
      currentRoom: this.props.currentRoom[0],
      emojiLibary: false
    });
  }

  emojiParser(code, data) {
    this.setState({
      body: this.state.body + ":" + data.name + ":"
    });
  }

  toggleEmoji(e) {
    e.preventDefault(e);
    this.setState({
      emojiLibary: !this.state.emojiLibary
    });
  }

  render() {
    return (
      <div className="messages_submit_container">
        <div id={this.state.emojiLibary ? "emoji-picker" : "hidden"}>
          <EmojiPicker onEmojiClick={this.emojiParser} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={emojify(this.state.body, { output: "unicode" })}
            onChange={this.update("body")}
            placeholder="your message goes here"
            className="message-input"
          />
          <button type="submit" className="message-submit" />
          <button onClick={this.toggleEmoji} id="emoji-button">
            |+|
          </button>
        </form>
      </div>
    );
  }
}

export default AddMessageForm;
