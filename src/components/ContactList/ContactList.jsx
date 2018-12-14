import React, { Component } from "react";
import Person from "../Person/Person.jsx";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getContactList = this.getContactList.bind(this);
  }

  getContactList() {
    fetch("http://localhost:3000/getContacts", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())

      .then(list => {
        const array = Object.keys(list).map(key => {
          return [list[key]];
        });
        return array.map(uname => (
          <Person name={uname} handleAddContact={this.handleAddContact} />
        ));
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <menu className="list-friends">{this.getContactList()}</menu>;
  }
}

export default SearchList;
