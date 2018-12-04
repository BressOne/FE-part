import React, { Component } from "react";
import Login from "../Login/Login.jsx";
import Chat from "../Chat/Chat.jsx";
import { CookiesProvider } from "react-cookie";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: window.sessionStorage.getItem("islogged")
    };
    this.handleLoggIn = this.handleLoggIn.bind(this);
  }

  handleLoggIn = boolValue => {
    this.setState({ isLoggedIn: boolValue });
    window.sessionStorage.setItem("islogged", boolValue);
  };

  render() {
    return (
      <CookiesProvider>
        {this.state.isLoggedIn ? (
          <Chat />
        ) : (
          <Login handleLogin={this.handleLoggIn} />
        )}
      </CookiesProvider>
    );
  }
}

export default Main;
