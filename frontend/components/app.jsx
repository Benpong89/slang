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
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import signo from './slack_signo.jpg'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
