import React, { Component } from "react";
import Person from "../Person/Person.jsx";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: ""
    };

    this.getContactList = this.getContactList.bind(this);
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

      .then(list => {
        const array = Object.keys(list).map(key => {
          return [list[key]];
        });

        return array.map(uname => <Person name={uname} />);
      })
      .then(array => {
        thisClosure.setState({ contactList: array });
        console.log(thisClosure.contactList);
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
