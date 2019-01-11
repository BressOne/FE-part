import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

class ConversationWriteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formMessage: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessageFetch = this.sendMessageFetch.bind(this);
    this.sendSocketIO = this.sendSocketIO.bind(this);
  }
  sendSocketIO(states) {
    const payload = {
      toUsername: states.selectedUser,
      message: this.state.formMessage,
      cookie: document.cookie
    };
    console.log(payload);
    socket.emit("message_emit_sent", payload);
  }

  handleInputChange(event) {
    const currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState({ currentState });
  }

  sendMessageFetch(event, states) {
    const payload = {
      toUsername: states.selectedUser,
      message: this.state.formMessage
    };
    fetch("http://localhost:3000/postMessage", {
      credentials: "include",
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())

      .then(response => {
        console.log(response.message);
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states }) =>
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
              {/* <i className="fa fa-picture-o" />
              <i className="fa fa-file-o" /> */}
              <span
                className="send"
                onClick={e => {
                  this.sendMessageFetch(e, states);
                  this.sendSocketIO(states);
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
