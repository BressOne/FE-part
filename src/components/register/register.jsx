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
