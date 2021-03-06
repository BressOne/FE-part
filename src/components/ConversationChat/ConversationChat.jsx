import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

import ChatMessage from "../ChatMessage/ChatMessage.jsx";
import ConversationChatChild from "../ConversationChatChild/ConversationChatChild.jsx";

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
    fetch(`http://localhost:3000/contacts/messages/${username}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
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
            <ConversationChatChild selectedUser={states.selectedUser} />
          ) : (
            <div className="_" />
          )
        }
      </AppContextProvider.Consumer>
    );
  }
}
export default ConversationChat;
