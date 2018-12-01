import React, { Component } from "react";
import Person from "../Person/Person.jsx";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeResultList = this.makeResultList.bind(this);
  }

  makeResultList(list) {
    const array = Object.keys(list).map(key => {
      return [list[key]];
    });
    return array.map(uname => <Person name={uname} />);
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
