import React, { Component } from "react";
import Login from "../Login/Login.jsx";
import Chat from "../Chat/Chat.jsx";

import AppContextProvider from "../Context/Context.jsx";

class Main extends Component {
  componentDidCatch(error) {
    if (error === "Not authorized") {
      window.sessionStorage.setItem("islogged", "false");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      isLoggedIn: false
    };
    this.update = selectedUser => this.setState(selectedUser);
    this.handleLoggIn = this.handleLoggIn.bind(this);
  }
  handleLoggIn = boolValue => {
    this.setState({ isLoggedIn: boolValue });
    window.sessionStorage.setItem("islogged", boolValue);
  };

  render() {
    let update = this.update,
      states = this.state;
    return this.state.isLoggedIn ? (
      <AppContextProvider.Provider value={{ update, states }}>
        <Chat />
      </AppContextProvider.Provider>
    ) : (
      <Login handleLogin={this.handleLoggIn} />
    );
  }
}

export default Main;
