import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import RoundButton from '../UI/RoundButton/RoundButton';
import Aux from '../../hoc/Aux/Aux';
import './Home.css';

const home = ( props ) => (
    <Aux>
        <div className="AddButtonSpace">
            <RoundButton color="blue"><i className="large plus icon"></i></RoundButton>
        </div>
        <Container>
            <Segment>
                <h1>List</h1>
                <hr></hr>
                <p>List goes here</p>
            </Segment>
        </Container>
    </Aux>
);

export default home;