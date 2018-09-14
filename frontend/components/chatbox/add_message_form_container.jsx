import { connect } from 'react-redux';
import AddMessageForm from './add_message_form.jsx';
import { createMessage } from '../../actions/message_actions.js';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  createMessage: (message) => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageForm);
