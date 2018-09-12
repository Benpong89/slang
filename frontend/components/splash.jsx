import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

class Splash  extends React.Component {

  render() {
    return (
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
      </div>
    );
  }

}

export default withRouter(Splash)
