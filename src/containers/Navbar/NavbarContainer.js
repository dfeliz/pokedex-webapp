import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import isLoggedInContext from '../../helpers/Context/context';

class NavbarContainer extends Component {    
    static contextType = isLoggedInContext;

    render () {
        return (
            <isLoggedInContext.Consumer>
                {({isLoggedIn, username}) => (
                    <Navbar isLoggedIn={isLoggedIn} username={username}/>
                )}
            </isLoggedInContext.Consumer>
        );
    }
}

export default NavbarContainer;