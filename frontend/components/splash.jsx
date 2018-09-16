import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active1: false,
      active2: false,
      active3: false,
      active4: false
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
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
  toggle3() {
    this.setState({
      active3: !this.state.active3
    });
  }

  toggle4() {
    this.setState({
      active4: !this.state.active4
    });
  }

  render() {
    return (
      <div className="splash-container">
        <header className="splash-header">
          <div className="logo-nav">
            <Link to="/">
              <img className="img-logo" src={window.logoURL} />
            </Link>
            <h1 className="text-logo">slang</h1>

            <nav
              onMouseOver={this.toggle1}
              onMouseLeave={this.toggle1}
              className="nav-link-drops"
            >
              Why Slang?
            </nav>
            <div className={"hidden" + (this.state.active1 ? " active1" : "")}>
              All the cool kids use Slang!
            </div>

            <nav
              onMouseOver={this.toggle2}
              onMouseLeave={this.toggle2}
              className="nav-link-drops"
              to="/"
            >
              Solutions
            </nav>
            <div className={"hidden" + (this.state.active2 ? " active2" : "")}>
              Having trouble understanding millenials? Try communicating with
              Slang!{" "}
            </div>

            <nav
              onMouseOver={this.toggle3}
              onMouseLeave={this.toggle3}
              className="nav-link-drops"
            >
              Resources
            </nav>
            <div className={"hidden" + (this.state.active3 ? " active3" : "")}>
              Stay up to date with the latest Slang! #yolo #lit
            </div>

            <nav
              onMouseOver={this.toggle4}
              onMouseLeave={this.toggle4}
              className="nav-link-drops"
              to="/"
            >
              Pricing
            </nav>
            <div className={"hidden" + (this.state.active4 ? " active4" : "")}>
              Priceless
            </div>
          </div>
          <GreetingContainer />
        </header>

        <div className="splash-body-container">
          <div className="splash-pic-container">
            <img className="splash-photo" src={window.splashPhotoURL} />
          </div>
          <div className="splash-message-container">
            <div className="splash-title">Where Work Happens</div>
            <div className="splash-message">
              When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's
              budget, measure an A/B test, plan your next office opening, and
              more, Slang has you covered!
            </div>
            <Link to="/signup" className="get-started-button">
              Get Started
            </Link>
            <br />
            <label className="get-started-text">Already using Slang? </label>
            <Link className="get-started-signin" to="signin">
              Sign in.
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);

// <Link onClick={this.toggle} className={'nav-link' + (this.state.active ? ' active' : '')} to="/" >Why Slang?</Link>

// menu1Toggle() {
//   const menu = document.getElementById('menu1')
//   menu.classList.toggle('hidden')
//   menu.classList.toggle('menu1')
// }

// this.menu1Toggle = this.menu1Toggle.bind(this);
