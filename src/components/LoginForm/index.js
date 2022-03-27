// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', result: {}, loginError: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureFailure = () => {
    this.setState({loginError: true})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedResult = {
      statusCode: data.status_code,
      errorMsg: data.error_msg,
    }

    this.setState({username: '', password: '', result: updatedResult})
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onFailureFailure()
    }
  }

  renderLoginUsername = () => {
    const {username} = this.state

    return (
      <div className="login-container">
        <label htmlFor="username" className="label-name">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          className="input-element"
          placeholder="Username"
        />
      </div>
    )
  }

  renderLoginPassword = () => {
    const {password} = this.state

    return (
      <div className="login-container">
        <label htmlFor="password" className="label-name">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          className="input-element"
          placeholder="Password"
        />
      </div>
    )
  }

  render() {
    const {result, loginError} = this.state
    const {errorMsg} = result

    return (
      <div className="login-image-form-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="website-logo-image-1"
          />
        </div>
        <div className="login-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div>
          <form onSubmit={this.onSubmit} className="form-cont">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
                alt="website logo"
                className="website-logo-image-2"
              />
            </div>
            {this.renderLoginUsername()}
            {this.renderLoginPassword()}
            <button type="submit" className="logout-button">
              Login
            </button>
            <div>
              {loginError ? (
                <p className="error-message">{`*${errorMsg}`}</p>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
