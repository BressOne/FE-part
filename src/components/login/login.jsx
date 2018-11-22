import React, { Component } from "react";
import "./css/main.css";
import LoginForm from "../loginform/loginform.jsx";
import RegisterForm from "../registerform/registerform.jsx";
import "../../modules/Validator/Validator.js";
import {
  validateEmail,
  validateUserName,
  validatePassword
} from "../../modules/Validator/Validator.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: true,
      formData: {
        registerEmail: "",
        registerUserName: "",
        registerPassword: "",
        registerPasswordConf: "",
        loginUsername: "",
        loginPassword: ""
      },
      errors: {}
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.registerFetch = this.registerFetch.bind(this);
    this.loginFetch = this.loginFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }
  registerFetch(event) {
    event.preventDefault();
    this.state.errors.email = "";
    this.state.errors.userName = "";
    this.state.errors.password = "";
    document
      .getElementById("email_wrapper")
      .classList.remove("alert-validate");
    document
      .getElementById("username_wrapper")
      .classList.remove("alert-validate");
    document
      .getElementById("password_wrapper")
      .classList.remove("alert-validate");
    let payload = {
      email: this.state.formData.registerEmail,
      username: this.state.formData.registerUserName,
      password: this.state.formData.registerPassword,
      passwordConf: this.state.formData.registerPasswordConf
    };
    let emailValidationStatus = validateEmail(payload.email),
      usernameValidationStatus = validateUserName(payload.username),
      passwordValidationStatus = validatePassword(
        payload.password,
        payload.passwordConf
      );

    if (
      !(
        emailValidationStatus.result &&
        usernameValidationStatus.result &&
        passwordValidationStatus.result
      )
    ) {
      if (!emailValidationStatus.result) {
        const { errors } = this.state;

        errors["email"] = emailValidationStatus.error;
        this.setState({ errors });
        document
          .getElementById("email_wrapper")
          .setAttribute("data-validate", this.state.errors.email);
        document
          .getElementById("email_wrapper")
          .classList.add("alert-validate");
      }
      if (!usernameValidationStatus.result) {
        const { errors } = this.state;
        errors["userName"] = usernameValidationStatus.error;
        this.setState({ errors });
        document
          .getElementById("username_wrapper")
          .setAttribute("data-validate", this.state.errors.userName);
        document
          .getElementById("username_wrapper")
          .classList.add("alert-validate");
      }
      if (!passwordValidationStatus.result) {
        const { errors } = this.state;
        errors["password"] = passwordValidationStatus.error;
        this.setState({ errors });
        document
          .getElementById("password_wrapper")
          .setAttribute("data-validate", this.state.errors.password);
        document
          .getElementById("password_wrapper")
          .classList.add("alert-validate");
      }
    } else {
      fetch("http://localhost:3000/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          document.getElementById("responseRegister").innerText =
            response.message;
        })
        .catch(function(err) {
          document.getElementById("responseRegister").innerText = err;
          console.log(err);
        });
    }
  }
  loginFetch(event) {
    event.preventDefault();
    let payload = {
      loginusername: this.state.formData.loginUsername,
      loginpassword: this.state.formData.loginPassword
    };
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        document
          .getElementById("username_wrapper")
          .setAttribute("data-validate", response.message);
        document
          .getElementById("username_wrapper")
          .classList.add("alert-validate");
      })
      .catch(function(err) {
        document.getElementById("username_wrapper").innerText = err;
      });
  }
  handleSignUp() {
    this.setState({
      loginView: false
    });
  }
  handleLogin() {
    this.setState({
      loginView: true
    });
  }
  render() {
    return (
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30'>
            <div className='login100-form validate-form'>
              <span className='login100-form-title p-b-55'>
                {this.state.loginView ? "Login" : "Register"}
              </span>
              {this.state.loginView ? (
                <LoginForm
                  onSignUp={this.handleSignUp}
                  onLoginFetch={this.loginFetch}
                  onChange={this.handleChange}
                />
              ) : (
                <RegisterForm
                  onLogin={this.handleLogin}
                  onRegisterFetch={this.registerFetch}
                  onChange={this.handleChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
