import React, { Component } from "react";

class ConversationWriteForm extends Component {
  render() {
    return (
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
    );
  }
}
export default ConversationWriteForm;
