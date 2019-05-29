import React from 'react';
import Aux from '../../hoc/Aux/Aux.js'
import Navbar from '../../containers/Navbar/NavbarContainer';
import './Layout.css'

const Layout = ( props ) => {
    return (
        <Aux>
            <header>
                <Navbar/>
            </header>
            <div className="Body">
                {props.children}
            </div>
        </Aux>
    );
};

export default Layout;