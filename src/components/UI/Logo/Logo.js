import React from 'react';
import {NavLink} from 'react-router-dom';
import './Logo.css';

const logo = ( props ) => (
    <NavLink to="/">
        <div className="Logo">
            <img 
                src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png"
                alt="logo"
                />
            <h1>Pokedex</h1>
        </div>
    </NavLink>
);

export default logo;