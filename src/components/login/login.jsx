import React, { Component } from "react";
import "./css/main.css";

function registerFetch() {
  let payload = {
    email: document.getElementById("register-email").value,
    username: document.getElementById("register-username").value,
    password: document.getElementById("register-password").value,
    passwordConf: document.getElementById("register-passwordConf").value
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
      document.getElementById("responseRegister").innerText = response.message;
    })
    .catch(function(err) {
      document.getElementById("responseRegister").innerText = err;
      console.log(err);
    });
};

function loginFetch() {
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
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      loginScreen: true
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick () {
    console.log(this.state.loginScreen);
    this.setState({
      loginScreen: !loginScreen
    }); 
}

  render() {
    
    let loginForm = (
        
      <div className="cover-full">
        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Username is required"
          id="username_wrapper"
        >
          <input
            className="input100"
            type="text"
            name="loginusername"
            placeholder="Username"
            id="loginusername"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Password is required"
          id="password_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="loginpassword"
            placeholder="Password"
            id="loginpassword"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div className="container-login100-form-btn p-t-25">
          <button className="login100-form-btn" onClick={loginFetch}>
            Login
          </button>
        </div>

        <div className="text-center w-full p-t-115">
          <span className="txt1">Not a member?</span>
          <a className="txt1 bo1 hov1" onClick={this.handleClick}>
            Sign up now
          </a>
        </div>
      </div>
    );

    let registerForm = (
      <div>
        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Valid e-mail: mail@domain.some"
          id="email_wrapper"
        >
          <input
            className="input100"
            type="e-mail"
            name="registeremail"
            placeholder="mail@mail.com"
            id="registeremail"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="A-z 0-9 alowed"
          id="username_wrapper"
        >
          <input
            className="input100"
            type="e-mail"
            name="registerusername"
            placeholder="mail@mail.com"
            id="registerusername"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-envelope" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Password is required"
          id="password_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="registerpassword"
            placeholder="Password"
            id="registerpassword"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Passwords are not same"
          id="confpassword_wrapper"
        >
          <input
            className="input100"
            type="password"
            name="loginpassword"
            placeholder="Password"
            id="registerconfpassword"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <span className="lnr lnr-lock" />
          </span>
        </div>

        <div className="container-login100-form-btn p-t-25">
          <button className="login100-form-btn" onClick={registerFetch}>
            Register
          </button>
        </div>

        <div className="text-center w-full p-t-115">
          <span className="txt1">Already registered?</span>

          <a className="txt1 bo1 hov1" href="#" onClick={this.handleClick}>
            Log in now
          </a>
        </div>
      </div>
    );

    let body = this.state.loginScreen ? loginForm : registerForm;

    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                {!this.state.isLogged && this.state.loginScreen
                  ? "Login"
                  : "Register"}
              </span>
              {body}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
