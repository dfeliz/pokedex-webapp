import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Form, Input, Button } from 'semantic-ui-react';
import { withRouter, NavLink } from 'react-router-dom';
import './Login.css';

const login = ( props ) => (
    <Aux>
        <Form.Group>
            <Form className="Login" onSubmit={(e) => props.onFormSubmit(e)}>
                <Form.Field
                    id="username"
                    label="Username"
                    placeholder="Username"
                    control={Input}
                    onChange={(e) => props.onTextChange(e, "username")}
                />
                <Form.Field
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    control={Input}
                    onChange={(e) => props.onTextChange(e, "password")}
                />
                {
                    props.loading ? 
                    <Button loading disabled fluid color="blue">Login</Button> : <Button fluid color="blue">Login</Button>
                }
            </Form>
            <NavLink to="/forgot-password">
                <span className="Forgot-password">Forgot my password :(</span>
            </NavLink>
            <div className="ui horizontal divider">OR</div>
            <NavLink to="/register">
                <Button fluid color="green">Register</Button>
            </NavLink>);
        </Form.Group>
    </Aux>
);

export default withRouter(login);