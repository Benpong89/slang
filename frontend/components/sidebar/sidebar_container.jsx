import { connect } from "react-redux";
import { signout } from "../../actions/session_actions";
import { requestAllSubscriptions } from "../../actions/subscription_actions";
import Sidebar from "./sidebar.jsx";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  requestAllSubscriptions: subscriptions =>
    dispatch(requestAllSubscriptions(subscriptions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
