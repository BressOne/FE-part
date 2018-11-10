import React, { Component } from "react";

class LoginForm extends Component {
       
  render() {
    return (
<div>
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-55">{!this.state.isLogged && this.state.loginScreen ? "Login" : "Register"}</span>

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
                  id='loginusername'
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
                  id='loginpassword'
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-lock" />
                </span>
              </div>

              <div className="container-login100-form-btn p-t-25">
                <button className="login100-form-btn" onClick={loginFetch}>Login</button>
              </div>

              <div className="text-center w-full p-t-115">
                <span className="txt1">Not a member?</span>

                <a className="txt1 bo1 hov1" href="#">
                  Sign up now
                </a>
              </div>
            </form>
            </div>  

    );
  }
}

export default LoginForm;