import React, { Component } from "react";

class ConversationChat extends Component {
  render() {
    return (
      <ul className="messages">
        <li className="i">
          <div className="head">
            <span className="time">10:13 AM, Today</span>
            <span className="name">Буль</span>
          </div>
          <div className="message">Привет!</div>
        </li>
        <li className="i">
          <div className="head">
            <span className="time">10:13 AM, Today</span>
            <span className="name">Буль</span>
          </div>
          <div className="message">)</div>
        </li>
        <li className="i">
          <div className="head">
            <span className="time">10:14 AM, Today</span>
            <span className="name">Буль</span>
          </div>
          <div className="message">М не счастья..</div>
        </li>
        <li className="friend-with-a-SVAGina">
          <div className="head">
            <span className="name">Юния</span>
            <span className="time">10:15 AM, Today</span>
          </div>
          <div className="message">чего тебе?</div>
        </li>
      </ul>
    );
  }
}
export default ConversationChat;
