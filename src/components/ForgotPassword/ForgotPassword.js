import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import {Form, Input, Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const forgotPassword = ( props ) => (
    <Aux>
        <Form onSubmit={props.onFormSubmit}>
            <Form.Field
                id="email"
                label="Email"
                placeholder="johndoe@example.com"
                control={Input}
                onChange={(e) => {props.onChange(e)}}
                required
            />
            <Button fluid color="blue">Send mail</Button>
            <div className="ui horizontal divider">Here by mistake?</div>
            <NavLink to="/login">
                <Button fluid color="blue">Back to login</Button>
            </NavLink>
        </Form>
    </Aux>
);

export default forgotPassword;