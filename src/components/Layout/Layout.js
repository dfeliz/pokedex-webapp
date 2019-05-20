import React from 'react';
import Aux from '../../hoc/Aux.js'

const Layout = ( props ) => {
    return (
        <Aux>
            <header>
                Navbar
            </header>
            {props.children}
        </Aux>
    );
};

export default Layout;