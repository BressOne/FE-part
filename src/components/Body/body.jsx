import React, { Component } from "react";
import List from "../List/List.jsx";
import Conversation from "../Conversation/Conversation.jsx";

class Body extends Component {
  render() {
    return (
      <div ClassName="ui">
        <List />
        <Conversation />
      </div>
    );
  }
}

export default Body;
