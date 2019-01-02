import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

import ChatMessage from "../ChatMessage/ChatMessage.jsx";

class ConversationChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ""
    };

    this.handleSearchFetch = this.handleSearchFetch.bind(this);
  }
  handleSearchFetch(event, username) {
    event.preventDefault();
    const payload = {
      username: username
    };

    fetch("http://localhost:3000/getDialogueMessages", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
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
            <ul
              className="messages"
              onClick={event =>
                this.handleSearchFetch(event, states.selectedUser)
              }
            >
              <ChatMessage isVisavee={true} />
              <ChatMessage isVisavee={false} />
              <ChatMessage isVisavee={true} />
            </ul>
          ) : (
            <div className="_" />
          )
        }
      </AppContextProvider.Consumer>
    );
  }
}
export default ConversationChat;
