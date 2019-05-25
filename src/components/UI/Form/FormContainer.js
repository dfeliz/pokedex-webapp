import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import './FormContainer.css';

const formContainer = ( props ) => {
    return (
        <Container className="Form-container">
            <Segment className="Form-segment">
            <div>
                <img src="https://semantic-ui.com/images/wireframe/image.png" alt="Logo"/>
            </div>
                {props.children}     
            </Segment>
        </Container>
    )
};

export default formContainer;