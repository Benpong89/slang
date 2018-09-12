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

// import logo from './slack_logo.jpg'
// import logo from './slack_logo.jpg'


const App = () => (
  <div className="greeting-container">
    <header className="greeting-header">
      <div className='left-nav'>
        <Link to="/" >
          <img className='logo' src={window.logoURL} />
        </Link>
        <h1 className='header-logo'>slang</h1>
      </div>
      <GreetingContainer />
    </header>
    <div className='splash-container'>
      <div className='splash-pic'></div>
        <img src={window.splashPhotoURL} />
      <div className='splash-message'></div>
    </div>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
