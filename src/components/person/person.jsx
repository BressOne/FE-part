import React, { Component } from "react";
import AppContextProvider from "../Context/Context.jsx";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name
    };
  }
  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states }) => (
          <li
            key={this.props.name}
            onClick={
              this.props.handleAddContact
                ? e => this.props.handleAddContact(this.state.username, e)
                : e => {
                    update({ selectedUser: this.props.name });
                  }
            }
            className="container-li"
            name={this.props.name}
          >
            <div className="container">
              <img width="50" height="50" src="" alt="" />
              {this.props.handleAddContact ? (
                <div className="overlay">
                  <div href="#" className="icon" title="User Profile">
                    <b>+</b>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="info">
              <div className="user">{this.props.name}</div>
              <div className="status on"> online</div>
            </div>
            {this.props.handleRemoveContact ? (
              <div className="container-remove">
                <div
                  href="#"
                  name="sdsd"
                  className="overlay-delete"
                  title="Remove from Contacts"
                  onClick={e =>
                    this.props.handleRemoveContact(this.state.username, e)
                  }
                >
                  <div
                    href="#"
                    className="icon-delete"
                    title="Remove from Contacts"
                  >
                    ✕
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </li>
        )}
      </AppContextProvider.Consumer>
    );
  }
}

export default Person;
