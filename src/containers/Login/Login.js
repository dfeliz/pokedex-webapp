import React, { Component } from 'react';
import FormContainer from '../../components/UI/Form/FormContainer';
import { Form, Input, Button } from 'semantic-ui-react';
import './Login.css';

class Login extends Component {

    render () {
        return (
            <FormContainer>
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
                    <span className="Forgot-password">Forgot password</span>
                    <div className="ui horizontal divider">OR</div>
                    <Button fluid color="green">Register</Button>
                </Form.Group>
            </FormContainer>
        );
    }
}

export default Login;