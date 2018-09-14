import { connect } from 'react-redux';
import AddMessageForm from './add_message_form.jsx';
import { addMessage, setMessages } from '../../message_actions.js';

const mapStateToProps = state => ({
  messages: state.chat
});

const mapDispatchToProps = dispatch => ({
  addMessage: () => dispatch(addMessage(message))
  setMessages: () => dispatch(setMessages(messages))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageForm);
