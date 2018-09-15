import React from 'react'
import Cable from 'actioncable';
import { receiveMessage } from '../../actions/message_actions'


class MessagesList extends React.Component {
    constructor(props) {
      super(props);

    this.props.requestAllMessages();
    this.props.requestAllUsers();
    }

    componentDidMount() {
      App.cable.subscriptions.create(
        { channel: 'LineChannel', room: "Test Room" },
        {received: (data) => { dispatch(receiveMessage({
          id: data.id,
          body: data.body,
          author_id: data.author_id,
          messageable_type: data.messageable_type,
          messageable_id: data.messageable_id,
        })) }} )
    }

    render() {
      const messages = this.props.messages.map((message, idx) => {
        return (
          <li key={idx} className='message'>{message}</li>
        )}
      )

      const usernames = this.props.messagesAuthorId.map((id) => {
        return this.props.users.map(user => user[id])
      })

      const authors = usernames.map((username, idx) => {
        return (
          <li key={idx} className='message'>{username}</li>
        )
      })

      return (
        <div className='messages_list'>
          <ul>
            {authors}
          </ul>
          <ul>
            {messages}
          </ul>
        </div>
      );
    }
}

export default MessagesList
