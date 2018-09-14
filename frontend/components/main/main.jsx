import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import GreetingContainer from '.././greeting/greeting_container';
import Chatbox from '.././chatbox/chatbox.jsx'

class Main extends React.Component {

  render() {
    return (
    <div>
      <div className="splash-container">
        <div className="signin-form-container">
          <header className="splash-header">
            <div className='logo-nav'>
              <Link to="/" >
                <img className='img-logo' src={window.logoURL} />
              </Link>
              <h1 className='text-logo'>slang</h1>
            </div>
          </header>
        </div>
        Test Message Page yay
      </div>


    </div>
    );
  }

}

export default withRouter(Main)
