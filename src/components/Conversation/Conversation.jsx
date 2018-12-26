import React, { Component } from "react";
import ConversationHeader from "../ConversationHeader/ConversationHeader.jsx";
import ConversationChat from "../ConversationChat/ConversationChat.jsx";
import ConversationWriteForm from "../ConversationWriteForm/ConversationWriteForm.jsx";

class Conversation extends Component {
  render() {
    return (
      <div className="chat">
        <ConversationHeader />
        <ConversationChat />
        <ConversationWriteForm />
      </div>
    );
  }
}

export default Conversation;
