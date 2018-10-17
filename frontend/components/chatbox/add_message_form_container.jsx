import { connect } from "react-redux";
import AddMessageForm from "./add_message_form.jsx";

const mapStateToProps = ({
  session,
  entities: { users },
  ui: { currentRoom }
}) => ({
  currentUser: users[session.id],
  currentRoom: Object.values(currentRoom),
  currentRoomDetails: currentRoom
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessageForm);
