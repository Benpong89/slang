import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

class Splash  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active1:false,
      active2:false,
    }

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle1() {
    this.setState({
      active1: !this.state.active1
    });
  }

  toggle2() {
    this.setState({
      active2: !this.state.active2
    });
  }


  render() {
    return (
      <div className="splash-container">

        <header className="splash-header">
          <div className='logo-nav'>
            <Link to="/" >
              <img className='img-logo' src={window.logoURL} />
            </Link>
            <h1 className='text-logo'>slang</h1>
            <nav onMouseOver={this.toggle1} onMouseLeave={this.toggle1} className='nav-link-drops'>Why Slang?</nav>
              <div className={'hidden' + (this.state.active1 ? ' active1' : '')}>All the cool kids use Slang!</div>
            <nav onMouseOver={this.toggle2} onMouseLeave={this.toggle2} className='nav-link-drops' to="/" >Solutions</nav>
              <div className={'hidden' + (this.state.active2 ? ' active2' : '')}>Having trouble understanding millenials? Try communicating with Slang! </div>
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
            <Link to="/signin" className='get-started-button'>Get Started</Link>
          </div>
        </div>

      </div>
    );
  }

}

export default withRouter(Splash)

            // <Link onClick={this.toggle} className={'nav-link' + (this.state.active ? ' active' : '')} to="/" >Why Slang?</Link>

              // menu1Toggle() {
              //   const menu = document.getElementById('menu1')
              //   menu.classList.toggle('hidden')
              //   menu.classList.toggle('menu1')
              // }

                  // this.menu1Toggle = this.menu1Toggle.bind(this);
