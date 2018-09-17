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

  //map through messages slice of state including body and author_id, or entire message for time stamp too.
  // return li {this.props.user.img_url} {this.props.users[message.author_id].username} {message.body} {message.created_at}

  render() {
    const messages = this.props.messages.map((message, idx) => {
      return (
        <li key={idx} className="message_container">
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
        </li>
      );
    });

    return <div className="messages_list_container">{messages}</div>;
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
