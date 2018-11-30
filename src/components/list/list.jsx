import React, { Component } from 'react';
import SearchList from '../SearchList/SerchList.jsx';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResult: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchFetch = this.handleSearchFetch.bind(this);
  }

  handleInputChange(event) {
    const currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState({ currentState });
  }

  handleSearchFetch(event) {
    event.preventDefault();
    let searchResult = this.state.searchResult;
    const thisClosure = this;
    const payload = {
      searchValue: this.state.searchValue,
    };

    fetch('http://localhost:3000/search_person', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        searchResult = response.resultList;
        thisClosure.setState({ searchResult });
        console.log(this.state.searchResult);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div className="left-menu">
      <form action="#" className="search" onSubmit={ this.handleSearchFetch } >
        <input placeholder="search..." type="search" name="searchValue" onChange={ this.handleInputChange } />
        <input type="submit" value="&#xf002;" />
      </form>
      <SearchList searchResult={ this.state.searchResult } />
    </div>;
  }
}

export default List;
