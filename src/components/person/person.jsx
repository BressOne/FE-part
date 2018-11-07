import React, { Component } from 'react';
import './person.css';

class Person extends Component {
    render () {
        return <div id = "person-wrapper">
        <div id = "person-avatar">
            
        </div>
        <div id = "person-name-message">
            <div id = "person-name-name">
                John Doe
            </div>
            <div id = "person-messge">
                some message out here
            </div>


        </div>
            
        </div>;
    };
};

export default Person;