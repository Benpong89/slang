import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link className='nav-session-link' to="/signin">Sign in</Link>
      <Link className='nav-session-link' to="/signup">Sign up</Link>
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
