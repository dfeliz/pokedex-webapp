import React, { Component } from 'react';
import Logout from '../../components/Logout/Logout';

class LogoutContainer extends Component {
    componentDidMount() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
    }

    render () {
        return(
            <Logout />
        );
    }
}

export default LogoutContainer;