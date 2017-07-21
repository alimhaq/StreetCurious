import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  clearErrors() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleDemo(e) {
    e.preventDefault();
    let user = { username: "guest", password: "123456789" };
    this.props.loginUser(user).then(() => this.props.history.push('/'));
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link onClick={this.clearErrors} to="/signup">sign up instead</Link>;
    } else {
      return <Link onClick={this.clearErrors} to="/login">log in instead</Link>;
    }
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to StreetCurious!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                 onChange={this.update('username')} 
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                 onChange={this.update('password')} 
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
            <input type="submit" value="Guest" onClick={this.handleDemo} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);