import React, { Component } from "react";
import "./css/main.css";

import LoginForm from "../loginform/loginform.jsx";
import RegisterForm from "../registerform/registerform.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: true,
      responseMessge: ""
    };

    this.handleSignUpSwitch = this.handleSignUpSwitch.bind(this);
    this.registerFetch = this.registerFetch.bind(this);
    this.loginFetch = this.loginFetch.bind(this);
  }

  registerFetch(email, userName, password, passwordConf) {
    let payload = {
      email: email,
      username: userName,
      password: password,
      passwordConf: passwordConf
    };
    let responseMessge = this.state.responseMessge;
    let thisClosure = this;
   
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
        responseMessge = response.message;
        thisClosure.setState({ responseMessge });
        console.log(response.message);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  loginFetch(userName, password) {
    let payload = {
      loginusername: userName,
      loginpassword: password
    };
    let responseMessge = this.state.responseMessge;
    let thisClosure = this;
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
        responseMessge = response.message;
        thisClosure.setState({ responseMessge });
        console.log(response.message);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  handleSignUpSwitch() {
    this.setState({
      loginView: !this.state.loginView,
      responseMessge: ""
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
              <div>{this.state.responseMessge ? this.state.responseMessge : null}</div>
              {this.state.loginView ? (
                <LoginForm
                  onSignUp={this.handleSignUpSwitch}
                  onLoginFetch={this.loginFetch}
                />
              ) : (
                <RegisterForm
                  onLogin={this.handleSignUpSwitch}
                  onRegisterFetch={this.registerFetch}
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
