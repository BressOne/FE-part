import React, { Component } from "react";
import Person from "../Person/Person.jsx";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseMessge: ""
    };
    this.makeResultList = this.makeResultList.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleAddContact(uname) {
    fetch(`http://localhost:3000/contacts/${uname}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).catch(err => {
      console.log(err);
    });
  }

  makeResultList(list) {
    const array = Object.keys(list).map(key => {
      return [list[key]];
    });

    return array.map(uname => (
      <Person
        key={uname[0].name + Math.random()}
        name={uname[0].name}
        handleAddContact={this.handleAddContact}
        onlineStatus={uname[0].onlineStatus}
      />
    ));
  }

  render() {
    return (
      <menu className="list-friends">
        {this.makeResultList(this.props.searchResult)}
      </menu>
    );
  }
}

export default SearchList;
