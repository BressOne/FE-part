import React from "React";

import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

class LoginPage {
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
      <div>
        {this.state.loginView ? (
          <Login onSignUp={this.handleSignUp} />
        ) : (
          <Register onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default LoginPage;
