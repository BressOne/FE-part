import React, { Component } from "react";
import classNames from "classnames";

import {
  validateEmail,
  validateUserName,
  validatePassword
} from "../../modules/Validator/Validator.js";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        registerEmail: "",
        registerUserName: "",
        registerPassword: "",
        registerPasswordConf: ""
      },
      errors: {
        registerEmail: "",
        registerUserName: "",
        registerPassword: ""
      }
    };

    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConf = this.handleChangePasswordConf.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleInputChange(event, validateFunc) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    const { errors } = this.state;
    errors[event.target.name] = validateFunc(event.target.value).error;
    this.setState({ errors });
  }

  handleEmailChange = event => {
    this.handleInputChange(event, validateEmail);
  };

  handleUserNameChange = event => {
    this.handleInputChange(event, validateUserName);
  };

  handleChangePassword(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    const { errors } = this.state;
    errors[event.target.name] = validatePassword(
      event.target.value,
      this.state.formData.registerPasswordConf
    ).error;
    this.setState({ errors });
  }

  handleChangePasswordConf(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    const { errors } = this.state;
    errors.registerPassword = validatePassword(
      this.state.formData.registerPassword,
      event.target.value
    ).error;
    this.setState({ errors });
  }

  preSubmitValidation() {
    const { errors } = this.state;
    errors.registerEmail = validateEmail(
      this.state.formData.registerEmail
    ).error;
    errors.registerPassword = validatePassword(
      this.state.formData.registerPassword,

      this.state.formData.registerPasswordConf
    ).error;
    errors.registerUserName = validateUserName(
      this.state.formData.registerUserName
    ).error;
    this.setState({ errors });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.preSubmitValidation();
    const registerPayload = this.state.formData;
    return !this.state.errors.registerEmail ||
      this.state.errors.registerPassword ||
      this.state.errors.registerUserName
      ? this.props.onRegisterFetch(
          registerPayload.registerEmail,
          registerPayload.registerUserName,
          registerPayload.registerPassword,
          registerPayload.registerPasswordConf
        )
      : null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="responseRegister" />
        <div
          className={classNames("wrap-input100 validate-input m-b-16", {
            "alert-validate": this.state.errors.registerEmail
          })}
          data-validate={this.state.errors.registerEmail}
          id="email_wrapper"
        >
          <input
            className="input100"
            type="e-mail"
            name="registerEmail"
            placeholder="mail@mail.com"
            id="registerEmail"
            onChange={this.handleEmailChange}
            value={this.state.formData.registerEmail}
            autoComplete="email"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className={classNames("wrap-input100 validate-input m-b-16", {
            "alert-validate": this.state.errors.registerUserName
          })}
          data-validate={this.state.errors.registerUserName}
          id="username_wrapper"
        >
          <input
            className="input100"
            type="username"
            name="registerUserName"
            placeholder="Username"
            id="registerusername"
            onChange={this.handleUserNameChange}
            value={this.state.formData.registerUserName}
            autoComplete="username"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className={classNames("wrap-input100 validate-input m-b-16", {
            "alert-validate":
              this.state.errors.registerPassword ||
              this.state.errors.registerPasswordConf
          })}
          data-validate={
            this.state.errors.registerPassword ||
            this.state.errors.registerPasswordConf
          }
          id="password_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="registerPassword"
            placeholder="Password"
            id="registerpassword"
            onChange={this.handleChangePassword}
            value={this.state.formData.registerPassword}
            autoComplete="new-password"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          id="confpassword_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="registerPasswordConf"
            placeholder="Confirm password"
            id="registerpasswordConf"
            onChange={this.handleChangePasswordConf}
            value={this.state.formData.registerPasswordConf}
            autoComplete="new-password"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div className="container-login100-form-btn p-t-25">
          <button className="login100-form-btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>

        <div className="text-center w-full p-t-20">
          <span className="txt1">Already registered? </span>

          <a className="txt1 hov1" href="#" onClick={this.props.onLogin}>
            Log in now
          </a>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
