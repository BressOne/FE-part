import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name[0]
    };
  }
  render() {
    return (
      <li
        onClick={e => this.props.handleAddContact(this.state.username, e)}
        className="container-li"
      >
        <div className="container">
          <img width="50" height="50" src="" alt="" />
          <div className="overlay">
            <div href="#" class="icon" title="User Profile">
              <b>+</b>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="user">{this.props.name}</div>
          <div className="status on"> online</div>
        </div>
      </li>
    );
  }
}

export default Person;
