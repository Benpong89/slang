import { connect } from "react-redux";
import { requestAllSubscriptions } from "../../actions/subscription_actions";
import StarredGroup from "./starred_group.jsx";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestAllSubscriptions: subscriptions =>
    dispatch(requestAllSubscriptions(subscriptions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarredGroup);
