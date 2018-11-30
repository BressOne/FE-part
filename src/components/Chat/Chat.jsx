import React, { Component } from 'react';
import List from '../List/List.jsx';
import Conversation from '../Conversation/Conversation.jsx';


import './chat.css';

class Chat extends Component {
  render() {
    return <div className="chat-main">
      <div className="ui">
        <List />
        <Conversation />
      </div>
    </div>;
  }
}


export default Chat;