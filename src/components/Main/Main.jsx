import React, { Component } from "react";
import Login from "../login/login.jsx";
import Header from "../header/header.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn : window.sessionStorage.getItem('islogged'),
    };
    this.handleLoggIn = this.handleLoggIn.bind(this);
  }
  handleLoggIn = (boolValue) => {
      this.setState({isLoggedIn: boolValue});
      window.sessionStorage.setItem('islogged',boolValue)}
  render() {
    return this.state.isLoggedIn ? <Header/> : <Login handleLogin = {this.handleLoggIn}/> 
  }
}

export default Main;
