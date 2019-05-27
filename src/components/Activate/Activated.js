import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const activated = ( props ) => (
    <Aux>
        <h1>Activate account</h1>
        <hr></hr>
        <p>Email {props.email} has been confirmed</p>
        <p>Account activated.</p>
    </Aux>
);

export default activated;