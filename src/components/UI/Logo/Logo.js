import React from 'react';
import {NavLink} from 'react-router-dom';
import './Logo.css';

const logo = ( props ) => (
    <NavLink to="/">
        <div className="Logo">
            <img 
                src="http://chittagongit.com/download/255172"
                alt="logo"
                />
            <h1>Pokedex</h1>
        </div>
    </NavLink>
);

export default logo;