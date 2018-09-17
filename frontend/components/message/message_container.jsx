import { connect } from "react-redux";
import { signout } from "../../actions/session_actions";
import Sidebar from "./sidebar.jsx";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
