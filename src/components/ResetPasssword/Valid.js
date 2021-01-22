import React from 'react';
import {Form, Button, Input} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';

const valid = ( props ) => (
    <>
        <Form onSubmit={props.onFormSubmit}>
            <Form.Field
                type="password"
                placeholder="New password"
                control={Input}
                label="New password"
                onChange={(e) => props.onTextChange(e, "password")}
                required
            />
            <Form.Field
                type="password"
                placeholder="Confirm password"
                control={Input}
                label="Confirm password"
                onChange={(e) => props.onTextChange(e, "confirmPassword")}
                required
            />
            {                
                props.loading ? <Button disabled loading fluid color="blue" className="Submit">Submit</Button> : <Button fluid color="blue" className="Submit">Submit</Button>
            }            
            {
                props.redirect ? <Redirect to="/login"/> : null
            }
        </Form>
    </>
);

export default valid;