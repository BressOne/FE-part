import React, { Component } from 'react';


class Person extends Component {
  render() {
    return <li>
            <img width="50" height="50" src=""></img>
            <div className="info">
                <div className="user">{ this.props.name }</div>
                <div className="status on"> online</div>
            </div>
        </li>
  }
}

export default Person;
