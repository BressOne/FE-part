import React, { Component } from "react";
import Person from "../Person/Person.jsx";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: ""
    };

    this.getContactList = this.getContactList.bind(this);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
  }
  componentDidMount() {
    this.getContactList();
  }
  getContactList() {
    const thisClosure = this;
    fetch("http://localhost:3000/contacts", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())

      .then(array => {
        return array.map(uname => (
          <Person
            key={uname.name}
            name={uname.name}
            handleRemoveContact={this.handleRemoveContact}
            onlineStatus={uname.onlineStatus}
          />
        ));
      })
      .then(array => {
        thisClosure.setState({ contactList: array });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleRemoveContact(uname) {
    fetch(`http://localhost:3000/contacts/${uname}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(() => {
        this.getContactList();
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <menu className="list-friends">{this.state.contactList}</menu>;
  }
}

export default SearchList;
