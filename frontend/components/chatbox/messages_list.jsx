import React from "react";
import Cable from "actioncable";
import { receiveMessage } from "../../actions/message_actions";
import Timestamp from "react-timestamp";

class MessagesList extends React.Component {
  constructor(props) {
    super(props);

    this.props.requestAllMessages();
    this.props.requestAllUsers();
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
  }

  render() {
    const messages = this.props.messages.map((message, idx) => {
      return (
        <li key={idx} className="message_body">
          {message}
        </li>
      );
    });

    const usernames = this.props.messagesAuthorId.map(id => {
      return this.props.users.map(user => user[id]);
    });

    const authors = usernames.map((username, idx) => {
      return (
        <li key={idx} className="messages_authors">
          <img className="default_user_img" src={window.userURL} />
          <label className="messages_author">{username}</label>
          <Timestamp
            className="messages_time"
            time={Date.now()}
            format="time"
          />
        </li>
      );
    });

    return (
      <div className="messages_list_container">
        <div className="message_authors_list">{authors}</div>
        <div className="message_body_list">{messages}</div>
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
