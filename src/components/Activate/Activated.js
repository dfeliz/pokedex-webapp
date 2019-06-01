import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';
import './Activated.css';

const activated = ( props ) => (
    <Aux>
        <h1>Activate account</h1>
        <hr></hr>
        <p>Email {props.email} has been confirmed</p>
        <p>Account activated. click 
            <NavLink to="/login">
                <span className="LinkToLogin">here</span> 
            </NavLink>
            to login
        </p>
    </Aux>
);

export default activated;