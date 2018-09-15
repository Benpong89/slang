import { connect } from 'react-redux';
import MessagesList from './messages_list.jsx';
import { requestAllMessages } from '../../actions/message_actions.js';
import { requestAllUsers } from '../../actions/session_actions.js';

const mapStateToProps = ({
    session,
    entities: { users },
    entities: { messages }
  }) => ({
     messages: Object.keys(messages).map(id => messages[id].body),
     messagesAuthorId: Object.keys(messages).map(id => messages[id].author_id),
     users: Object.keys(users).map(id => ({[users[id].id]: users[id].username}))
  });

const mapDispatchToProps = dispatch => ({
  requestAllMessages: (messages) => dispatch(requestAllMessages(messages)),
  requestAllUsers: (users) => dispatch(requestAllUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);


// var arr = [{
//   id: 1,
//   name: 'bill'
// }, {
//   id: 2,
//   name: 'ted'
// }]
//
// var result = arr.map(person => ({ value: person.id, text: person.name }));
// console.log(result)
