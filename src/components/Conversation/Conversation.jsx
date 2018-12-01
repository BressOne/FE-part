import React, { Component } from "react";

class Conversation extends Component {
  render() {
    return (
      <div className="chat">
        <div className="top">
          <div className="avatar">
            <img width="50" height="50" src="" alt="" />
          </div>
          <div className="info">
            <div className="name">Юния Гапонович</div>
            <div className="count">already 1 902 messages</div>
          </div>
          <i className="fa fa-star" />
        </div>
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
        <div className="write-form">
          <textarea
            placeholder="Type your message"
            name="e"
            id="texxt"
            rows="2"
          />
          <i className="fa fa-picture-o" />
          <i className="fa fa-file-o" />
          <span className="send">Send</span>
        </div>
      </div>
    );
  }
}

export default Conversation;
