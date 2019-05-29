import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import Logo from '../../components/UI/Logo/Logo'
import './FormContainer.css';

const formContainer = ( props ) => {
    return (
        <Container className="Form-container">
            <Segment className="Form-segment">
            <Logo/>
            <h2>{props.title}</h2>
            <div className="ui divider"/>
                {props.children}     
            </Segment>
        </Container>
    )
};

export default formContainer;