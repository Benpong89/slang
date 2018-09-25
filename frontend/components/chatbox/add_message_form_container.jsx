import { connect } from "react-redux";
import AddMessageForm from "./add_message_form.jsx";
import { createMessage } from "../../actions/message_actions.js";

//eventually, this will have to map chatbox tpe "channel or DM" and room id

const mapStateToProps = ({
  session,
  entities: { users },
  ui: { currentRoom }
}) => ({
  currentUser: users[session.id],
  currentRoom: Object.values(currentRoom),
  currentRoomDetails: currentRoom
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessageForm);
