import React, { Component } from 'react';
import './header.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic, faCogs, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faMagic, faCogs, faDoorOpen);


class Header extends Component {
    render () {
        return <div id = 'header'>
        
        <div id = 'header-logo'>
                        Some logo
        </div>

        <div id = 'header-icons'>
        <div><FontAwesomeIcon icon="magic" id = 'header-icons-element'/></div>
        <div><FontAwesomeIcon icon="cogs" id = 'header-icons-element'/></div>
        <div><FontAwesomeIcon icon="door-open" id = 'header-icons-element'/></div>
        </div>
        
        </div>;
    };
};

export default Header;