import React, { Component } from "react";
import List from "../List/List.jsx";
import Conversation from "../Conversation/Conversation.jsx";

import "./chat.css";

class Chat extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedUser: "123"
  //     // setSelectedUser: this.selectedUser()
  //   };
  //   this.setSelectedUser = this.setSelectedUser.bind(this);
  // }

  render() {
    return (
      <div className="chat-main">
        <div className="ui">
          <List isLoggedIn={this.props.isLoggedIn} />
          <Conversation />
        </div>
      </div>
    );
  }
}

export default Chat;
