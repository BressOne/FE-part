import React, { Component } from "react";

//import AppContextProvider from "../Context/Context.jsx";

import ChatMessage from "../ChatMessage/ChatMessage.jsx";

class ConversationChatChild extends Component {
  componentDidMount() {
    this.handleSearchFetch(this.props.selectedUser);
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      conversationList: []
    };

    this.handleSearchFetch = this.handleSearchFetch.bind(this);
  }

  handleSearchFetch(username) {
    const thisClosure = this;
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
      // <AppContextProvider.Consumer>
      //   {({ update, states }) => (
      <ul
        className="messages"
        onClick={event => {
          this.handleSearchFetch(this.props.selectedUser, event);
        }}
      >
        {this.state.conversationList}
      </ul>
      //   )}
      //   }
      // </AppContextProvider.Consumer>
    );
  }
}
export default ConversationChatChild;
