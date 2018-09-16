import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link className="nav-session-link" to="/signin">
        Sign in
      </Link>
      <Link className="nav-session-link" to="/signup">
        Sign up
      </Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="greeting-container">
      <h2 className="greeting-username">Hi, {currentUser.username}!</h2>
      <Link className="nav-session-link" to="/" onClick={signout}>
        Sign Out
      </Link>
      <Link className="nav-session-link" to="/main">
        Main page
      </Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
