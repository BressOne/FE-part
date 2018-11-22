import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.loginFetch}>
        <div
          className='wrap-input100 validate-input m-b-16'
          data-validate='Username is required'
          id='username_wrapper'>
          <input
            className='input100'
            type='text'
            name='loginUsername'
            placeholder='Username'
            id='loginusername'
            onChange={this.props.onChange}
            autoComplete='username'
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-envelope' />
          </span>
        </div>

        <div
          className='wrap-input100 validate-input m-b-16'
          data-validate='Password is required'
          id='password_wrapper'>
          <input
            className='input100'
            type='password'
            name='loginPassword'
            placeholder='Password'
            id='loginpassword'
            onChange={this.props.onChange}
            autoComplete='current-password'
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-lock' />
          </span>
        </div>

        <div className='container-login100-form-btn p-t-25'>
          <button
            type='submit'
            className='login100-form-btn'
            onClick={this.props.onLoginFetch}>
            Login
          </button>
        </div>

        <div className='text-center w-full p-t-20'>
          <span className='txt1'>Not a member? </span>
          <a className='txt1 hov1' href='#' onClick={this.props.onSignUp}>
            Sign up now
          </a>
        </div>
      </form>
    );
  }
}

export default LoginForm;
