import React, { Component } from "react";
import classNames from "classnames";
import Cookies from "universal-cookie";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        loginUsername: "",
        loginPassword: ""
      },
      errors: {
        loginValidationError: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    this.loginValidation();
  }

  loginValidation() {
    const payload = {
      loginUsername: this.state.formData.loginUsername,
      loginPassword: this.state.formData.loginPassword
    };

    if (payload.loginUsername.length < 6 || payload.loginPassword.length < 6) {
      const { errors } = this.state;
      errors.loginValidationError = "Login/pass incorrect input";
      this.setState({ errors });
    } else {
      const { errors } = this.state;
      errors.loginValidationError = "";
      this.setState({ errors });
    }
  }

  handleSubmit(event) {
    const payload = {
      username: this.state.formData.loginUsername,
      password: this.state.formData.loginPassword
    };
    console.log(payload);
    event.preventDefault();
    this.loginValidation();
    return !this.state.errors.loginValidationError
      ? this.props.onLoginFetch(payload.username, payload.password)
      : null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          className={classNames("wrap-input100 validate-input m-b-16", {
            "alert-validate": this.state.errors.loginValidationError
          })}
          data-validate={this.state.errors.loginValidationError}
          id="username_wrapper"
        >
          <input
            className="input100"
            type="text"
            name="loginUsername"
            placeholder="Username"
            id="loginUsername"
            autoComplete="username"
            onChange={this.handleChange}
            value={this.state.formData.loginUsername}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate=""
          id="password_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="loginPassword"
            placeholder="Password"
            id="loginPassword"
            onChange={this.handleChange}
            value={this.state.formData.loginPassword}
            autoComplete="current-password"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div className="container-login100-form-btn p-t-25">
          <button
            type="submit"
            className="login100-form-btn"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </div>

        <div className="text-center w-full p-t-20">
          <span className="txt1">Not a member? </span>
          <a className="txt1 hov1" href="#" onClick={this.props.onSignUp}>
            Sign up now
          </a>
        </div>
      </form>
    );
  }
}

export default LoginForm;
