import React from "react";
import Cable from "actioncable";
import { receiveMessage } from "../../actions/message_actions";
import Timestamp from "react-timestamp";

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    this.props.requestAllUsers();
    this.props.requestAllMessages();
    App.cable.subscriptions.create(
      { channel: "LineChannel", room: "LineRoom" },
      {
        received: data => {
          dispatch(receiveMessage(data));
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
    this.myRef.current.scrollIntoView();
  }

  componentWillUpdate() {
    this.myRef.current.scrollIntoView();
  }

  deleteMessage(messageId) {
    return e => {
      e.preventDefault();
      this.props.deleteMessage(messageId);
    };
  }

  render() {
    const messages = this.props.messages.filter(
      message => message.messageable_id === this.props.currentChannel[0].id
    );

    const currentMessages = messages.map((message, idx) => {
      if (this.props.users[message.author_id] === undefined) return null;
      return (
        <li id="messages-holder" key={idx} className="message_container">
          <img className="default_user_img" src={window.userURL} />
          <div>
            <div className="message_author">
              {this.props.users[message.author_id].username}
              <Timestamp
                className="messages_time"
                time={message.created_at}
                format="time"
              />
            </div>
            <div className="message_body">{message.body}</div>
          </div>
          <button
            onClick={this.deleteMessage(message.id)}
            className={
              "delete_message_button" +
              (this.props.currentUser.id === message.author_id ? "" : " hidden")
            }
          >
            X
          </button>
        </li>
      );
    });

    let currentChannel;

    if (typeof this.props.currentChannel[0].name === "string") {
      currentChannel = this.props.currentChannel[0].name;
    } else {
      const names = this.props.currentChannel[0].names;
      currentChannel = names.filter(
        name => name !== this.props.currentUser.username
      );
    }

    return (
      <div className="messages_list_container">
        <div className="messages_list_channel_name"> # {currentChannel}</div>
        <nav className="messages_list_nav" />
        <div className="messages_list_container">{currentMessages}</div>
        <div className="blank" ref={this.myRef} />
      </div>
    );
  }
}

export default MessagesList;

// if (this.props.currentUser === undefined) return null;
// if (this.props.channels.length === 0) return null;
// if (
//   this.props.channels.filter(
//     channel => channel.name === this.props.currentUser.username
//   ).length === 0
// )
//   return null;
// if (
//   this.props.channels.filter(
//     channel => channel.name === this.props.currentUser.username
//   )[0].name === this.props.currentUser.username
// )
//   return null;
// this.props.createSubscription({
//   user_id: this.props.currentUser.id,
//   subscribeable_id: this.props.channels.filter(
//     channel => channel.name === this.props.currentUser.username
//   )[0].id,
//   subscribeable_type: "DirectMessage"
// });
