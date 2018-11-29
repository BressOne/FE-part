import React, { Component } from 'react';
import './list.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import SearchList from '../SearchList/SerchList.jsx';

library.add(faSearchPlus);


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

  handleSearchFetch() {
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
    return <div id="list-wrapper">
      <div id="list-cap">
        <input type="text" id="list-cap-input" name="searchValue" onChange={ this.handleInputChange }></input>
        <FontAwesomeIcon icon="search-plus" onClick={ this.handleSearchFetch } />
      </div>
      <div id="list-contacts">
        <SearchList searchResult={ this.state.searchResult } />
      </div>
    </div>;
  }
}

export default List;
