import React from "react";
import { withRouter } from "react-router-dom";
import GreetingContainer from ".././greeting/greeting_container";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignin = this.guestSignin.bind(this);
    this.props.resetErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestSignin(e) {
    e.preventDefault();
    const randomUsers = [
      { username: "Tony Stark", password: "123456" },
      { username: "Steve Rogers", password: "123456" },
      { username: "Natasha Romanoff", password: "123456" },
      { username: "Clint Barton", password: "123456" },
      { username: "Nick Fury", password: "123456" },
      { username: "Aquaman", password: "123456" },
      { username: "The Hulk", password: "123456" },
      { username: "Batman", password: "123456" },
      { username: "Wonder Woman", password: "123456" },
      { username: "Static Shock", password: "123456" },
      { username: "The Flash", password: "123456" },
      { username: "Green Lantern", password: "123456" },
      { username: "Robin", password: "123456" },
      { username: "Superman", password: "123456" },
      { username: "Cat Woman", password: "123456" },
      { username: "Thor", password: "123456" },
      { username: "Moon Knight", password: "123456" },
      { username: "Freakazoid", password: "123456" },
      { username: "Cpt. Jack Sparrow", password: "123456" },
      { username: "Black Panther", password: "123456" },
      { username: "Venom", password: "123456" },
      { username: "Carnage", password: "123456" },
      { username: "Dr. Strange", password: "123456" },
      { username: "Captain Marvel", password: "123456" },
      { username: "Tom Brady", password: "123456" }
    ];

    const randomUser =
      randomUsers[Math.floor(Math.random() * randomUsers.length)];

    this.props.processForm(randomUser);
  }

  resetErrors() {
    this.setState({
      errors: []
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors-list" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <div className="signin-form-container">
          <header className="splash-header">
            <div className="logo-nav">
              <Link to="/">
                <img className="img-logo" src={window.newlogoURL} />
              </Link>
              <Link className="text-logo" to="/">
                <h1 className="text-logo">slang</h1>
              </Link>
            </div>
            <GreetingContainer />
          </header>
        </div>

        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <br />
          <label className="signin-title">{this.props.formType}</label>
          <label className="session-errors-list">{this.renderErrors()}</label>
          <div className="signin-form">
            <br />
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="username goes here"
                className="signin-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password goes here"
                className="signin-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit">
              Continue
              {"\u2192"}
            </button>
            <br />
            <button
              className={
                "session-submit" +
                (this.props.formType === "Sign up here!" ? " hidden" : "")
              }
              onClick={this.guestSignin}
            >
              Be my guest!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
