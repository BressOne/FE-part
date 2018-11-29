import React, { Component } from 'react';
import Person from '../person/person.jsx';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.makeResultList = this.makeResultList.bind(this);
  }

  makeResultList(list) {
    const array = Object.keys(list).map((key) => {
      return [list[key]];
    });

    return array.map(
      uname => <Person name={ uname } />,
    );
  }


  render() {
    return <div id="list-contacts">
      {this.makeResultList(this.props.searchResult)}

    </div>;
  }
}

export default SearchList;
