import React, { Component } from "react";
import "./css/main.css";
import LoginForm from "../loginform/loginform.jsx";
import RegisterForm from "../registerform/registerform.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loginView: true };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.registerFetch = this.registerFetch.bind(this);
    this.loginFetch = this.loginFetch.bind(this);
  }

  registerFetch() {
    let payload = {
      email: document.getElementById("registeremail").value,
      username: document.getElementById("registerusername").value,
      password: document.getElementById("registerpassword").value,
      passwordConf: document.getElementById("registerpasswordConf").value
    };
    console.log(payload);
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

  loginFetch() {
    let payload = {
      loginusername: document.getElementById("loginusername").value,
      loginpassword: document.getElementById("loginpassword").value
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
                {!this.state.isLogged && this.state.loginScreen
                  ? "Login"
                  : "Register"}
              </span>
              {this.state.loginView ? (
                <LoginForm
                  onSignUp={this.handleSignUp}
                  onLoginFetch={this.loginFetch}
                />
              ) : (
                <RegisterForm
                  onLogin={this.handleLogin}
                  onRegisterFetch={this.registerFetch}
                />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
