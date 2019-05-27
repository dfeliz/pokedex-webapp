import React, { Component } from 'react';
import {Container, Segment} from 'semantic-ui-react';
import Activated from '../../components/Activate/Activated';
import NoActivation from '../../components/Activate/NoActivation';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

class Activate extends Component {
    state = { 
        isValid: false,
        email: '',
    };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        if (values.code !== undefined & values.email !== undefined) {
            this.setState({isValid: true});
            //TODO: Axios post email and code for account activation
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