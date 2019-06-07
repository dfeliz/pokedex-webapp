import React, { Component } from 'react';
import {Container, Segment} from 'semantic-ui-react';
import Activated from '../../components/Activate/Activated';
import NoActivation from '../../components/Activate/NoActivation';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class Activate extends Component {
    state = { 
        isValid: false,
        email: '',
    };

    async componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        if (values.code !== undefined & values.email !== undefined) {
            const data = {
                hash: values.code,
                email: values.email,
            }
            await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/activate`, data)
                .then((response) => {
                    this.setState({isValid: true});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            this.setState({isValid: false});
        }
    }

    render () {
        return (
            <Container>
                <Segment>
                    {this.state.isValid ? <Activated email={this.state.email}/> : <NoActivation/>}
                </Segment>
            </Container>
        );
    }
}

export default withRouter(Activate);