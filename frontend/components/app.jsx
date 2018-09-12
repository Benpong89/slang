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
  <div className="splash-container">
    <header className="splash-header">
      <div className='logo-nav'>
        <Link to="/" >
          <img className='img-logo' src={window.logoURL} />
        </Link>
        <h1 className='text-logo'>slang</h1>
      </div>
      <GreetingContainer />
    </header>
    <div className='splash-body-container'>

      <div className='splash-pic-container'>
        <img className='splash-photo' src={window.splashPhotoURL} />
      </div>

      <div className='splash-message-container'>
        <div className='splash-title'>
          Where Work Happens
        </div>
        <div className='splash-message'>
          When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slang has you covered!
        </div>
      </div>

    </div>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
