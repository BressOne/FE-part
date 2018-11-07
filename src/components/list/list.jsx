import React, { Component } from 'react';
import Person from '../person/person.jsx'
import './list.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faSearchPlus);


class List extends Component {
    render () {
        return <div id="list-wrapper">
        <div id = "list-cap"> 
            <input type = "text" id = "list-cap-input"></input>
            <FontAwesomeIcon icon="search-plus"/>
        </div>
        <div id = "list-contacts">
            <Person />
            <Person />
            <Person />
            <Person />
        </div>
        </div>;
    };
};

export default List;