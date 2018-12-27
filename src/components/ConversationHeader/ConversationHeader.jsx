import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";
const MyContext = React.createContext();
class ConversationHeader extends Component {
  render() {
    return (
      // <MyContext.Consumer>
      <div className="top">
        <div className="avatar">
          <img width="50" height="50" src="" alt="" />
        </div>
        <div className="info">
          <div className="name">
            123
            {/* {context => {
                return context.selectedUser;
              }} */}
          </div>
          <div className="count">already 1 902 messages</div>
        </div>
        <i className="fa fa-star" />
      </div>
      // </MyContext.Consumer>
    );
  }
}
export default ConversationHeader;
