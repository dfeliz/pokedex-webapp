import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import './Logout.css'

const logout = ( props ) => (
    <Container id="Logout">
        <Segment>
            <h1>Logout</h1>
            <hr></hr>
            <p>Logged out succesfully. click <a href="/">here</a> to redirect to start.</p>
        </Segment>
    </Container>
);

export default logout;