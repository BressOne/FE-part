import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <div>
          <div id="responseRegister"></div>
        <div
          className='wrap-input100 validate-input m-b-16'
          data-validate='Valid e-mail: mail@domain.some'
          id='email_wrapper'>
          <input
            className='input100'
            type='e-mail'
            name='registeremail'
            placeholder='mail@mail.com'
            id='registeremail'
            onChange={this.props.onEmailChange}
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-envelope' />
          </span>
        </div>

        <div
          className='wrap-input100 validate-input m-b-16'
          data-validate='A-z 0-9 alowed'
          id='username_wrapper'>
          <input
            className='input100'
            type='username'
            name='registerusername'
            placeholder='Username'
            id='registerusername'
            onChange={this.props.onUserNameChange}
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
            name='registerpassword'
            placeholder='Password'
            id='registerpassword'
            onChange={this.props.onPasswordChange}
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-lock' />
          </span>
        </div>

        <div
          className='wrap-input100 validate-input m-b-16'
          data-validate='Passwords are not same'
          id='confpassword_wrapper'>
          <input
            className='input100'
            type='password'
            name='loginpassword'
            placeholder='Confirm password'
            id='registerpasswordConf'
            onChange={this.props.onPasswordConfChange}
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-lock' />
          </span>
        </div>

        <div className='container-login100-form-btn p-t-25'>
          <button className='login100-form-btn' onClick={this.props.onRegisterFetch}>
            Register
          </button>
        </div>

        <div className='text-center w-full p-t-20'>
          <span className='txt1'>Already registered? </span>

          <a className='txt1 hov1' href='#' onClick={this.props.onLogin}>
            Log in now
          </a>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
