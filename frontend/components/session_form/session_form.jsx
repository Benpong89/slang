import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingContainer from '.././greeting/greeting_container';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignin = this.guestSignin.bind(this);
  }

  update(field) {
    return e => this.setState({
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
    this.state.username = 'benpong89'
    this.state.password = '123456'
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className="splash-container">
      <div className="signin-form-container">
        <header className="splash-header">
          <div className='logo-nav'>
            <Link to="/" >
              <img className='img-logo' src={window.logoURL} />
            </Link>
            <h1 className='text-logo'>slang</h1>
          </div>
          <GreetingContainer />
        </header>
      </div>

        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <button onClick={this.guestSignin}>login as guest</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
