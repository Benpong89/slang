import React from 'react';
import MessagesList from './messages_list_container.jsx';
import AddMessageForm from './add_message_form_container.jsx';

class Chatbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="chatbox">
          <MessagesList />
          <AddMessageForm />
        </div>
    );
  }
}

export default Chatbox;

//
// <Sidebar />
// <MessagesList />
