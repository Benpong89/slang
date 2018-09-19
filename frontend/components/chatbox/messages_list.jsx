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

  componentWillMount() {
    this.props.requestAllUsers();
    this.props.requestAllMessages();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "LineChannel", room: "Test Room" },
      {
        received: data => {
          dispatch(
            receiveMessage({
              id: data.id,
              body: data.body,
              author_id: data.author_id,
              messageable_type: data.messageable_type,
              messageable_id: data.messageable_id
            })
          );
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
            className="delete_message_button"
          >
            X
          </button>
        </li>
      );
    });

    const currentChannel = this.props.currentChannel[0].name;

    return (
      <div className="messages_list_container">
        <div className="messages_list_channel_name"> # {currentChannel}</div>
        <div className="messages_list_container">{currentMessages}</div>
        <div ref={this.myRef}> </div>
      </div>
    );
  }
}

export default MessagesList;

// <ul>{authors}</ul>
// <ul>{messages}</ul>
//
// <div className="message_authors_list">{authors}</div>
// <div className="message_body_list">{messages}</div>

// debugger;

// const usernames = this.props.messagesAuthorId.map(id => {
//   return this.props.users.map(user => user[id]);
// });

// const authors = usernames.map((username, idx) => {
//   return (
//     <li key={idx} className="messages_authors">
//       <img className="default_user_img" src={window.userURL} />
//       <label className="messages_author">{username}</label>
//       <Timestamp
//         className="messages_time"
//         time={Date.now()}
//         format="time"
//       />
//     </li>
//   );
// });
