import React from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';
import {Redirect, withRouter, NavLink} from 'react-router-dom';
import {DatePicker} from '../UI/DatePicker/DatePicker';
import Aux from '../../hoc/Aux/Aux';
import './Register.css';

const register = ( props ) => (
    <Aux>
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
                    placeholder="johndoe@example.com" 
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
                <DatePicker 
                    label="Birthdate"
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

                {
                    props.loading ? 
                    <Button fluid loading disabled color="green">Register</Button> : <Button fluid color="green">Register</Button>
                }
                <div className="ui horizontal divider">OR</div>
                <NavLink to="/login">
                    <Button fluid color="blue">Login</Button>
                </NavLink>
            </Form>
        </Form.Group>
        {
            props.redirect ? 
            <Redirect to="/confirm-email"/> : null
        }
    </Aux>
);

export default withRouter(register);