import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../actions/session_actions.js'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign in \u2192',
    navLink: <Link to="/signup">Sign up here</Link>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
    resetErrors: () => dispatch({
      type: 'REMOVE_SESSION_ERRORS'
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
