import React, { Component } from "react";
import AppContextProvider from "../Context/Context.jsx";
import classNames from "classnames";

class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };

    this.calculateDate = this.calculateDate.bind(this);
  }
  calculateDate(propsDate) {
    let incomingDate = new Date(propsDate).toString();
    let today = Date(Date.now());
    let dateString = "";
    if (
      incomingDate.getFullYear() === today.getFullYear() &&
      incomingDate.getMonth() === today.getMonth() &&
      incomingDate.getDate() === today.getDate()
    ) {
      dateString =
        "Today, " + incomingDate.getHours() + "-" + propsDate.getMinutes();
    } else {
      dateString =
        incomingDate.getMonth() +
        "." +
        incomingDate.getDate() +
        " " +
        incomingDate.getHours() +
        "-" +
        incomingDate.getMinutes();
    }
    return dateString;
  }

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
              <span className="time">
                {new Date(this.props.date).toString()}
              </span>
              <span className="name">
                {this.props.isVisavee ? states.selectedUser : "You"}
              </span>
            </div>
            <div className="message">{this.props.content}</div>
          </li>
        )}
      </AppContextProvider.Consumer>
    );
  }
}
export default ChatMessage;
