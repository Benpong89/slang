import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import SigninFormContainer from './session_form/signin_form_container.jsx';
// import logo from './slack_logo.jpg'

const App = () => (
  <div>
    <header className="header">
      <h1>Slang</h1>
      <GreetingContainer />
    </header>

    <Route path="/signin" component={SigninFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
