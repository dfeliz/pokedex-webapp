import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';
import FormContainer from '../../components/UI/Form/FormContainer';
import {withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const GENDER_OPTIONS = [
    {key: 'm', text: 'Male', value: 'm'},
    {key: 'f', text: 'Female', value: 'f'},
    {key: 'o', text: 'Other', value: 'other'},
]

class Register extends Component {
    state = {
        name: "",
        lastname: "",
        birthdate: "",
        city: "",
        email: "",
        gender: "",
        username: "",
        password: "",
        redirect: false,
    }

    onTextChange = (event, field) => { 
        this.setState({[field]: event.target.value});
    }

    onSelectChange = (_, data) => {
        this.setState({ gender: data.value });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        let data = {
            user: {
                user_name: this.state.name,
                user_lastname: this.state.lastname,
                user_birthdate: this.state.birthdate,
                user_city: this.state.city,
                user_gender: this.state.gender,
                user_username: this.state.username,
                user_email: this.state.email,
                user_password: this.state.password,
                user_picture: "",
            }
        }
        await axios.post('http://localhost:3000/user/register', data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.setState({redirect: true});
            }
        }).catch((err) => {
            console.log("There was a problem with the operation, " + err);
        });
    }

    render () {
        return (
            <FormContainer>
                <h2>Register</h2>
                <div className="ui divider"/>
                <Form.Group>
                    <Form className="Register" onSubmit={this.onFormSubmit}>
                        <Form.Field 
                            id="username"
                            control={Input}
                            label="Username"
                            placeholder="Username" 
                            onChange={(e) => this.onTextChange(e, "username")}
                            />
                        <Form.Field 
                            id="email"
                            control={Input}
                            label="Email"
                            placeholder="Email" 
                            onChange={(e) => this.onTextChange(e, "email")}
                            />
                        <Form.Group>
                            <Form.Field 
                                id="password"
                                control={Input}
                                label="Password"
                                placeholder="Password"
                                type="password"
                                width={8} 
                                onChange={(e) => this.onTextChange(e, "password")}
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
                                onChange={(e) => this.onTextChange(e, "name")}
                                />
                            <Form.Field 
                                id="lastname"
                                control={Input}
                                label="Last name"
                                placeholder="Last name"
                                width={8} 
                                onChange={(e) => this.onTextChange(e, "lastname")}
                                />
                        </Form.Group>
                        <Form.Field 
                            id="gender"
                            control={Select}
                            options={GENDER_OPTIONS}
                            label="Gender"
                            placeholder="Gender" 
                            onChange={this.onSelectChange}
                            />
                        <Form.Field
                            id="bithdate"
                            control={Input}
                            label="Birthdate"
                            placeholder="Birthdate"
                            onChange={(e) => this.onTextChange(e, "birthdate")}
                        />
                        <Form.Field 
                            id="city"
                            control={Input}
                            label="City"
                            placeholder="City" 
                            onChange={(e) => this.onTextChange(e, "city")}
                            />

                        <Button fluid color="green">Register</Button>
                    </Form>
                </Form.Group>
                {this.state.redirect ? <Redirect to="/confirm-email"/> : null}
            </FormContainer>
        )
    }
}

export default withRouter(Register);