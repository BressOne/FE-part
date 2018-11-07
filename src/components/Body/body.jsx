import React, { Component } from 'react';
import List from '../list/list.jsx'
import './body.css';

class Body extends Component {
    render () {
        return <div id = 'body'>
        <div id = 'body-list'>
        <List />
        </div>
        <div id = 'body-dialogue'>
        Dialogue
        </div>
        </div>;
    };
};

export default Body;