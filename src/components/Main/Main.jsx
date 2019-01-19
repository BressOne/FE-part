import React, { Component } from "react";
import Login from "../Login/Login.jsx";
import Chat from "../Chat/Chat.jsx";

import AppContextProvider from "../Context/Context.jsx";

import openSocket from "socket.io-client";
let socket = openSocket("https://chat-back-end.herokuapp.com/", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity
});
socket.on("hey", data => console.log(data));

class Main extends Component {
  componentWillMount() {
    this.handshake();
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      isLoggedIn: false
    };
    this.update = selectedUser => this.setState(selectedUser);
    this.logout = isLoggedIn => this.setState(isLoggedIn);
    this.handleLoggIn = this.handleLoggIn.bind(this);
    this.handshake = this.handshake.bind(this);
  }
  handshake() {
    const thisClosure = this;

    fetch("https://chat-back-end.herokuapp.com/handshake", {
      credentials: "include",
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        thisClosure.setState({ isLoggedIn: response.handshake });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLoggIn = boolValue => {
    this.setState({ isLoggedIn: boolValue });
    window.sessionStorage.setItem("islogged", boolValue);
  };

  render() {
    let update = this.update,
      states = this.state,
      logout = this.logout;
    return this.state.isLoggedIn ? (
      <AppContextProvider.Provider value={{ update, states, logout, socket }}>
        <Chat />
      </AppContextProvider.Provider>
    ) : (
      <Login handleLogin={this.handleLoggIn} />
    );
  }
}

export default Main;
