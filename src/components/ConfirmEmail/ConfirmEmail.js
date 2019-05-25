import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import './ConfirmEmail.css';

const confirmEmail = ( props ) => (
    <Container id="ConfirmEmail-Container">
        <Segment>
            <h1>Confirm Email</h1>
            <hr></hr>
            <p>Please check your imbox</p>
        </Segment>
    </Container>
);

export default confirmEmail;