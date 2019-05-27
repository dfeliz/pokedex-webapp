import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Form, Input, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import './Login.css';

const login = ( props ) => (
    <Aux>
        <h2>Login</h2>
        <div className="ui divider"/>
        <Form.Group>
            <Form className="Login">
                <Form.Field
                    id="username"
                    label="Username"
                    placeholder="Username"
                    control={Input}
                />
                <Form.Field
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    control={Input}
                />
                <Button fluid color="blue">Login</Button>
            </Form>
            <span className="Forgot-password">Forgot my password :(</span>
            <div className="ui horizontal divider">OR</div>
            <Button fluid color="green">Register</Button>
        </Form.Group>
    </Aux>
);

export default withRouter(login);