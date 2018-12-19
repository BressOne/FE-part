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
    fetch("http://localhost:3000/getContacts", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())

      .then(array => {
        // console.log(list);
        // const array = Object.keys(list).map(key => {
        //   return [list[key]];
        // });
        console.log(array);
        return array.map(uname => (
          <Person
            key={uname}
            name={uname}
            handleRemoveContact={this.handleRemoveContact}
          />
        ));
      })
      .then(array => {
        thisClosure.setState({ contactList: array });
        console.log(thisClosure.contactList);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleRemoveContact(uname) {
    let payload = { username: uname };
    let responseMessge = this.state.responseMessge;
    fetch("http://localhost:3000/deleteContact", {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(response => response.json())

      .then(response => {
        responseMessge = response.message;
        console.log(responseMessge);
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
