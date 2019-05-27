import React from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';
import {Redirect, withRouter} from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import './Register.css';

const register = ( props ) => (
    <Aux>
        <h2>Register</h2>
        <div className="ui divider"/>
        <Form.Group>
            <Form className="Register" onSubmit={props.onFormSubmit}>
                <Form.Field 
                    id="username"
                    control={Input}
                    label="Username"
                    placeholder="Username" 
                    onChange={(e) => props.onTextChange(e, "username")}
                    required
                    />
                <Form.Field 
                    id="email"
                    type="email"
                    control={Input}
                    label="Email"
                    placeholder="Email" 
                    onChange={(e) => props.onTextChange(e, "email")}
                    required
                    />
                <Form.Group>
                    <Form.Field 
                        id="password"
                        control={Input}
                        label="Password"
                        placeholder="Password"
                        type="password"
                        width={8} 
                        onChange={(e) => props.onTextChange(e, "password")}
                        required
                        />
                    <Form.Field 
                        id="repeat-password"
                        control={Input}
                        label="Repeat password"
                        placeholder="Repeat password"
                        type="password"
                        width={8}
                        onChange={(e) => props.onTextChange(e, "repeatedPassword")}
                        required
                        />
                </Form.Group>

                <div className="ui divider"/>
                <Form.Group>
                    <Form.Field 
                        id="firstname"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                        width={8} 
                        onChange={(e) => props.onTextChange(e, "name")}
                        required
                        />
                    <Form.Field 
                        id="lastname"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                        width={8} 
                        onChange={(e) => props.onTextChange(e, "lastname")}
                        required
                        />
                </Form.Group>
                <Form.Field 
                    id="gender"
                    control={Select}
                    options={props.genderOptions}
                    label="Gender"
                    placeholder="Gender" 
                    onChange={props.onSelectChange}
                    />
                <Form.Field
                    id="bithdate"
                    control={Input}
                    label="Birthdate"
                    placeholder="Birthdate"
                    onChange={(e) => props.onTextChange(e, "birthdate")}
                    required
                    />
                <Form.Field 
                    id="city"
                    control={Input}
                    label="City"
                    placeholder="City" 
                    onChange={(e) => props.onTextChange(e, "city")}
                    required
                    />

                {props.loading ? <Button fluid loading disabled color="green">Register</Button> : <Button fluid color="green">Register</Button>}
            </Form>
        </Form.Group>
        {props.redirect ? <Redirect to="/confirm-email"/> : null}
    </Aux>
);

export default withRouter(register);