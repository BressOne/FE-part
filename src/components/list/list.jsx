import React, { Component } from "react";
import SearchList from "../SearchList/SerchList.jsx";
import ContactList from "../ContactList/ContactList.jsx";

import AppContextProvider from "../Context/Context.jsx";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchFetch = this.handleSearchFetch.bind(this);
    this.handleclearInput = this.handleclearInput.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleInputChange(event) {
    const currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState({ currentState });
    if (this.state.searchValue) {
      this.handleSearchFetch(event);
    }
  }

  handleclearInput() {
    const currentState = this.state;
    currentState.searchValue = "";
    this.setState({ currentState });
  }

  handleSearchFetch(event) {
    event.preventDefault();
    let searchResult = this.state.searchResult;
    const thisClosure = this;
    const payload = {
      searchValue: this.state.searchValue
    };

    fetch("http://localhost:3000/search_person", {
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
        console.log(response);
        searchResult = response.resultList;
        thisClosure.setState({ searchResult });
        console.log(this.state.searchResult);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLogOut(event) {
    fetch("http://localhost:3000/logout", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <AppContextProvider.Consumer>
        {({ update, states }) => (
          <div className="left-menu">
            <div className="left-menu-wrapper">
              <form
                action="#"
                className="search"
                onSubmit={this.handleSearchFetch}
              >
                <input
                  placeholder="search..."
                  type="search"
                  name="searchValue"
                  onChange={this.handleInputChange}
                  value={this.state.searchValue}
                />
                <input type="submit" value="&#xf002;" />
              </form>
              {this.state.searchValue ? (
                <div className="search-result">
                  <button
                    type="submit"
                    className="contacts100-form-btn"
                    onClick={this.handleclearInput}
                  >
                    back
                  </button>

                  <SearchList searchResult={this.state.searchResult} />
                </div>
              ) : (
                <ContactList />
              )}
            </div>
            <button
              onClick={e => {
                this.handleLogOut();
                states.isLoggedIn = false;
              }}
              className="logout-btn"
            >
              logout
            </button>
          </div>
        )}
      </AppContextProvider.Consumer>
    );
  }
}

export default List;
