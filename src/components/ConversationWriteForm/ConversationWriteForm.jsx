import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

// import openSocket from "socket.io-client";
// let socket = {};

class ConversationWriteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formMessage: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.sendMessageFetch = this.sendMessageFetch.bind(this);
    this.sendSocketIO = this.sendSocketIO.bind(this);
  }
  sendSocketIO(states, e, socket) {
    // socket = openSocket("https://chat-back-end.herokuapp.com:8000", {
    //   reconnection: true,
    //   reconnectionDelay: 1000,
    //   reconnectionDelayMax: 5000,
    //   reconnectionAttempts: Infinity
    // });

    const payload = {
      toUsername: states.selectedUser,
      message: this.state.formMessage
    };

    socket.emit("message_emit_sent", payload);
    this.setState({ formMessage: "" });
  }

  handleInputChange(event) {
    const currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState({ currentState });
  }
  // legacy remnants of simple routing functional on backend
  // ======================================
  // sendMessageFetch(event, states) {
  //   let thisClosure = this;
  //   const payload = {
  //     toUsername: states.selectedUser,
  //     message: this.state.formMessage
  //   };
  //   fetch("https://chat-back-end.herokuapp.com/postMessage", {
  //     credentials: "include",
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(payload)
  //   })
  //     .then(response => response.json())

  //     .then(response => {
  //       console.log(response.message);
  //     })

  //     .catch(err => {
  //       console.log(err);
  //       thisClosure.setState({ formMessage: "" });
  //     });
  // }

  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states, logout, socket }) =>
          states.selectedUser ? (
            <div className="write-form">
              <textarea
                placeholder="Type your message"
                name="formMessage"
                id="texxt"
                rows="1"
                value={this.state.formMessage}
                onChange={this.handleInputChange}
              />
              {/* Remnants of avatar functional. Just lets leave it here for a while */}
              {/* <i className="fa fa-picture-o" />
              <i className="fa fa-file-o" /> */}
              <span
                className="send"
                onClick={e => {
                  this.sendSocketIO(states, e, socket);
                }}
              >
                Send
              </span>
            </div>
          ) : (
            <div className="_" />
          )
        }
      </AppContextProvider.Consumer>
    );
  }
}
export default ConversationWriteForm;