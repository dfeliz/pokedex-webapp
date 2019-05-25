import React from 'react';
import Aux from '../../hoc/Aux/Aux.js'
import Navbar from '../../containers/Navbar/NavbarContainer';

const Layout = ( props ) => {
    return (
        <Aux>
            <header>
                <Navbar/>
            </header>
            {props.children}
        </Aux>
    );
};

export default Layout;