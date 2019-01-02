import React, { Component } from "react";
import AppContextProvider from "../Context/Context.jsx";
import classNames from "classnames";

class ChatMessage extends Component {
  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states }) => (
          <li
            className={classNames(
              {
                "friend-with-a-SVAGina": this.props.isVisavee
              },
              { "i-am": !this.props.isVisavee }
            )}
          >
            <div className="head">
              <span className="time">10:14 AM, Today</span>
              <span className="name">
                {this.props.isVisavee ? states.selectedUser : "You"}
              </span>
            </div>
            <div className="message">М не счастья..</div>
          </li>
        )}
      </AppContextProvider.Consumer>
    );
  }
}
export default ChatMessage;
