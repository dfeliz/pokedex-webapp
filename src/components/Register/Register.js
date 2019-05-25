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
            <Form className="Register" onSubmit={this.props.onFormSubmit}>
                <Form.Field 
                    id="username"
                    control={Input}
                    label="Username"
                    placeholder="Username" 
                    onChange={(e) => this.props.onTextChange(e, "username")}
                    />
                <Form.Field 
                    id="email"
                    control={Input}
                    label="Email"
                    placeholder="Email" 
                    onChange={(e) => this.props.onTextChange(e, "email")}
                    />
                <Form.Group>
                    <Form.Field 
                        id="password"
                        control={Input}
                        label="Password"
                        placeholder="Password"
                        type="password"
                        width={8} 
                        onChange={(e) => this.props.onTextChange(e, "password")}
                        />
                    <Form.Field 
                        id="repeat-password"
                        control={Input}
                        label="Repeat password"
                        placeholder="Repeat password"
                        type="password"
                        width={8} />
                </Form.Group>

                <div className="ui divider"/>
                <Form.Group>
                    <Form.Field 
                        id="firstname"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                        width={8} 
                        onChange={(e) => this.props.onTextChange(e, "name")}
                        />
                    <Form.Field 
                        id="lastname"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                        width={8} 
                        onChange={(e) => this.props.onTextChange(e, "lastname")}
                        />
                </Form.Group>
                <Form.Field 
                    id="gender"
                    control={Select}
                    options={props.genderOptions}
                    label="Gender"
                    placeholder="Gender" 
                    onChange={this.props.onSelectChange}
                    />
                <Form.Field
                    id="bithdate"
                    control={Input}
                    label="Birthdate"
                    placeholder="Birthdate"
                    onChange={(e) => this.props.onTextChange(e, "birthdate")}
                />
                <Form.Field 
                    id="city"
                    control={Input}
                    label="City"
                    placeholder="City" 
                    onChange={(e) => this.props.onTextChange(e, "city")}
                    />

                <Button fluid color="green">Register</Button>
            </Form>
        </Form.Group>
        {this.props.redirect ? <Redirect to="/confirm-email"/> : null}
    </Aux>
);

export default withRouter(register);