import React from 'react'
import Cable from 'actioncable';


class MessagesList extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
      App.cable.subscriptions.create( { channel: 'LineChannel', room: "Test Room" }, {received: (data) => { console.log(data )} } )
      this.props.requestAllMessages();
    }

    render() {
      const messages = this.props.messages.map((message, idx) => {
        return (
          <li key={idx}>{message}</li>
      )}
    )

      return (
        <div>
          <ul>
            {messages}
          </ul>
        </div>
      );
    }
}

export default MessagesList

// createConnection() {
//   const connection = Cable.createConsumer();
//
//   connection.subscriptions.create({
//     channel: 'LineChannel',
//     room: `1`
//   }, {
//     connected: function() {console.log("connected")},
//     disconnected: function() {},
//     received: (data) => {
//       this.state.messages.push(data)
//     },
//   });
// };
//
// componentDidMount(){
//   this.createConnection()
// }

// const messages = () => {
//   return (
//     <Message
//       message={message} />
//   );
// });
// import React from 'react';
// import PostIndexItem from './message_index_item';
// import CreatePostFormContainer from './create_post_form_container';

// class PostIndex extends React.Component {
//
//   componentDidMount() {
//     this.props.fetchPosts();
//   }
//
//   render() {
//     const messages = this.props.messages.map(post => {
//       return (
//         <PostIndexItem
//           key={post.id}
//           post={post}
//           deletePost={this.props.deletePost} />
//       );
//     });
//
//     return (
//       <div>
//         <ul>
//           {messages}
//         </ul>
//         <CreatePostFormContainer />
//       </div>
//     );
//   }
// }
//
// export default PostIndex;
