import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

import ChatMessage from "../ChatMessage/ChatMessage.jsx";

class ConversationChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      conversationList: []
    };

    this.handleSearchFetch = this.handleSearchFetch.bind(this);
  }
  handleSearchFetch(event, username) {
    const thisClosure = this;
    event.preventDefault();
    const payload = {
      username: username
    };

    fetch("http://git.heroku.com/chat-back-end.git:3000/getDialogueMessages", {
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
        let result = response.map((item, i) => (
          <ChatMessage
            key={item.dateTime + i}
            isVisavee={item.sender === "You" ? false : true}
            content={item.content}
            date={item.dateTime}
          />
        ));
        result.reverse();
        thisClosure.setState({ conversationList: result });
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
              onClick={event => {
                this.handleSearchFetch(event, states.selectedUser);
              }}
            >
              {this.state.conversationList}
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
