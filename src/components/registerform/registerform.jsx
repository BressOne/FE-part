import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <div>
          <div id="responseRegister"></div>
        <div
          className={this.props.errorList.email ? 'wrap-input100 validate-input m-b-16 alert-validate' : 'wrap-input100 validate-input m-b-16'}
          data-validate={this.props.errorList.email}
          id='email_wrapper'
          >
          <input
            className='input100'
            type='e-mail'
            name='registerEmail'
            placeholder='mail@mail.com'
            id='registerEmail'
            onChange={this.props.onChange}
            autoComplete="email"
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-envelope' />
          </span>
        </div>

        <div
          className={this.props.errorList.userName ? 'wrap-input100 validate-input m-b-16 alert-validate' : 'wrap-input100 validate-input m-b-16'}
          data-validate={this.props.errorList.userName}
          id='username_wrapper'>
          <input
            className='input100'
            type='username'
            name='registerUserName'
            placeholder='Username'
            id='registerusername'
            onChange={this.props.onChange}
            autoComplete="username"
          />
          <span className='focus-input100' />
          <span className='symbol-input100'>
            <span className='lnr lnr-envelope' />
          </span>
        </div>

        <div
          className={this.props.errorList.password ? 'wrap-input100 validate-input m-b-16 alert-validate' : 'wrap-input100 validate-input m-b-16'}
          data-validate={this.props.errorList.password}

          id='password_wrapper'>
          <input
            className='input100'
            type='password'
            name='registerPassword'
            placeholder='Password'
            id='registerpassword'
            onChange={this.props.onChange}
            autoComplete="new-password"
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
            name='registerPasswordConf'
            placeholder='Confirm password'
            id='registerpasswordConf'
            onChange={this.props.onChange}
            autoComplete="new-password"
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
