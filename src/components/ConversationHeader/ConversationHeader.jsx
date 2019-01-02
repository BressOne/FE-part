import React, { Component } from "react";

import AppContextProvider from "../Context/Context.jsx";

class ConversationHeader extends Component {
  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states }) =>
          states.selectedUser ? (
            <div className="top">
              <div className="avatar">
                <img width="50" height="50" src="" alt="" />
              </div>
              <div className="info">
                <div className="name">
                  <div>{states.selectedUser}</div>
                </div>
                <div className="count">already X XXX messages</div>
              </div>
              <i className="fa fa-star" />
            </div>
          ) : (
            <div className="top" />
          )
        }
      </AppContextProvider.Consumer>
    );
  }
}
export default ConversationHeader;
