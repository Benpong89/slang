import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
      &nbsp;or&nbsp;
      <Link to="/main">Message page test</Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={signout}>Sign Out</button>
      &nbsp;or&nbsp;
      <Link to="/main">Main page</Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
