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
    this.props.resetErrors();
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
    const user = { username: 'guest', password: '123456' }
    this.props.processForm(user)
  }

  resetErrors() {
    this.setState({
      errors: [],
    })
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='errors-list' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className='session-form-container'>
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
          <label className='signin-title'>Sign in to your workspace</label>
          <label className='session-errors-list'>{this.renderErrors()}</label>
          <div className="signin-form">
            <br/>
            <label >
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username goes here"
                className="signin-input"
              />
            </label>
            <br/>
            <label >
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password goes here"
                className="signin-input"
              />
            </label>
            <br/>
            <button className="session-submit" type="submit">{this.props.formType}</button>
            <button className={"session-submit" + (this.props.formType === 'Sign up \u2192' ? " hidden" : '')} onClick={this.guestSignin}>Be my guest!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
