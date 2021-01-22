import React from 'react';
import Navbar from '../../containers/Navbar/NavbarContainer';
import './Layout.css'

const Layout = ( props ) => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div className="Body">
                {props.children}
            </div>
        </>
    );
};

export default Layout;