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
    let payload = { username: uname };
    console.log(payload);
    let responseMessge = this.state.responseMessge;
    // const thisClosure = this;
    fetch("https://git.heroku.com/chat-back-end.git:3000/addContact", {
      method: "post",
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
      })

      .catch(err => {
        console.log(err);
      });
  }

  makeResultList(list) {
    const array = Object.keys(list).map(key => {
      return [list[key]];
    });
    return array.map(uname => (
      <Person
        key={uname}
        name={uname}
        handleAddContact={this.handleAddContact}
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
