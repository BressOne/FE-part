import React, { Component } from "react";
import "./css/main.css";
import LoginForm from "../loginform/loginform.jsx";
import RegisterForm from "../registerform/registerform.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: true,
      registerEmail: "",
      registerUserName: "",
      registerPassword: "",
      registerPasswordConf: "",
      loginusername: "",
      loginpassword: ""
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.registerFetch = this.registerFetch.bind(this);
    this.loginFetch = this.loginFetch.bind(this);
    this.handleChangeLoginUserName = this.handleChangeLoginUserName.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConf = this.handleChangePasswordConf.bind(this);
  }
  handleChangeLoginUserName(event) {
    const value = event.target.value;

    this.setState({
      loginusername: value
    });
  };
  handleChangeLoginPassword(event) {
    const value = event.target.value;

    this.setState({
      loginpassword: value
    });
  };
  handleChangeEmail(event) {
    const value = event.target.value;

    this.setState({
      registerEmail: value
    });
  };
  handleChangeUserName(event) {
    const value = event.target.value;

    this.setState({
      registerUserName: value
    });
  };
  handleChangePassword(event) {
    const value = event.target.value;

    this.setState({
      registerPassword: value
    });
  };
  handleChangePasswordConf(event) {
    const value = event.target.value;

    this.setState({
      registerPasswordConf: value
    });
  };
  registerFetch() {
    let payload = {
      email: this.state.registerEmail,
      username: this.state.registerUserName,
      password: this.state.registerPassword,
      passwordConf: this.state.registerPasswordConf
    };

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
  };
  loginFetch() {
    let payload = {
      loginusername: this.state.loginusername,
      loginpassword: this.state.loginpassword,
      
    };
    console.log(payload);
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
  };
  handleSignUp() {
    this.setState({
      loginView: false
    });
  };
  handleLogin() {
    this.setState({
      loginView: true
    });
  };
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                {this.state.loginView
                  ? "Login"
                  : "Register"}
              </span>
              {this.state.loginView ? (
                <LoginForm
                  onSignUp={this.handleSignUp}
                  onLoginFetch={this.loginFetch}
                  onLoginUserNameChange={this.handleChangeLoginUserName}
                  onLoginPasswordChange={this.handleChangeLoginPassword}
                />
              ) : (
                <RegisterForm
                  onLogin={this.handleLogin}
                  onRegisterFetch={this.registerFetch}
                  onUserNameChange={this.handleChangeUserName}
                  onPasswordChange={this.handleChangePassword}
                  onPasswordConfChange={this.handleChangePasswordConf}
                  onEmailChange={this.handleChangeEmail}
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
