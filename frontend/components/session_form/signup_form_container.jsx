import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../../actions/session_actions.js'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up \u2192',
    navLink: <Link to="/signin">Sign in here</Link>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
