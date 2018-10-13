import { connect } from "react-redux";
import { requestAllSubscriptions } from "../../actions/subscription_actions";
import StarredGroup from "./starred_group.jsx";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestAllSubscriptions: subscriptions =>
    dispatch(requestAllSubscriptions(subscriptions)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarredGroup);
