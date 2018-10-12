import React from "react";
import Cable from "actioncable";
import { receiveMessage } from "../../actions/message_actions";
import { removeSubscription } from "../../actions/subscription_actions";
import {
  receiveDirectMessage,
  removeDirectMessage
} from "../../actions/direct_message_actions";
import Timestamp from "react-timestamp";
import { emojify } from "react-emojione";

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.deleteMessage = this.deleteMessage.bind(this);
    this.openRoomDetailModal = this.openRoomDetailModal.bind(this);
  }

  componentDidMount() {
    this.props.requestAllUsers();
    this.props.requestAllMessages();

    App.cable.subscriptions.create(
      { channel: "LineChannel", room: "LineRoom" },
      {
        received: data => {
          switch (data.socket_type) {
            case "message":
              delete data["socket_type"];
              dispatch(receiveMessage(data.message));
              break;
            case "direct_message":
              delete data["socket_type"];
              dispatch(receiveDirectMessage(data));
              break;
            case "delete_direct_message":
              delete data["socket_type"];
              dispatch(removeDirectMessage(data.direct_message_id.id));
              dispatch(removeSubscription(data.subscription_id.id));
              break;
            default:
              break;
          }
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
    this.myRef.current.scrollIntoView();
  }

  componentDidUpdate() {
    this.myRef.current.scrollIntoView();
  }

  deleteMessage(messageId) {
    return e => {
      e.preventDefault();
      this.props.deleteMessage(messageId);
    };
  }

  openRoomDetailModal(e) {
    e.preventDefault();
    this.props.openModal("roomDetail");
  }

  render() {
    const messages = this.props.messages.filter(
      message => message.messageable_id === this.props.currentRoom[0].id
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
            <div className="message_body">
              {emojify(message.body, { output: "unicode" })}
            </div>
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

    let currentRoom;

    if (typeof this.props.currentRoom[0].name === "string") {
      currentRoom = this.props.currentRoom[0].name;
    } else {
      const names = this.props.currentRoom[0].names;
      currentRoom = names.filter(
        name => name !== this.props.currentUser.username
      );
    }

    return (
      <div className="messages_list_container">
        <div className="messages_list_channel_name"> # {currentRoom}</div>
        <div className="message_list_nav_buttons">
          <button
            onClick={this.openRoomDetailModal}
            className="usericon-button"
          >
            <img className="usericon" src={window.userCountURL} />
            <div className="usericon_count">
              {this.props.currentRoom[0].subs.length}
            </div>
          </button>
        </div>
        <nav className="messages_list_nav" />
        <div className="message_list">{currentMessages}</div>
        <div className="blank" ref={this.myRef} />
      </div>
    );
  }
}

export default MessagesList;

// Star icons
//
// <button className="staricon" onClick={this.handleStarIcon}>
//   {this.state.fav ? "\u2B52" : "\u2B50"}
// </button>

// this.state = {
//   fav: false
// };

// this.handleStarIcon = this.handleStarIcon.bind(this);

// handleStarIcon(e) {
//   e.preventDefault();
//   this.setState({
//     fav: !this.state.fav
//   });
// }
