import { connect } from 'react-redux';
import MessagesList from './messages_list.jsx';
import { requestAllMessages } from '../../actions/message_actions.js';

const mapStateToProps = (state) => ({
   messages: Object.keys(state.entities.messages).map(id => state.entities.messages[id].body)
    // posts: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  requestAllMessages: (messages) => dispatch(requestAllMessages(messages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
