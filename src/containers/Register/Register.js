import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';
import FormContainer from '../../components/UI/Form/FormContainer';
// import axios from 'axios';
import './Register.css';

const genderOptions = [
    {key: 'm', text: 'Male', value: 'Male'},
    {key: 'f', text: 'Female', value: 'Female'},
    {key: 'o', text: 'Other', value: 'Other'},
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
        password: ""
    }

    onTextChange = (event, field) => { 
        this.setState({[field]: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //axios.post('http://localhost:3000/user/register', data)
    }

    render () {
        return (
            <FormContainer>
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
                            options={genderOptions}
                            label="Gender"
                            placeholder="Gender" 
                            onChange={(e) => this.onTextChange(e, "gender")}
                            />
                        {/* Birth date */}
                        <Form.Field 
                            id="city"
                            control={Input}
                            label="City"
                            placeholder="City" 
                            onChange={(e) => this.onTextChange(e, "city")}
                            />

                        <Button color="green">Register</Button>
                    </Form>
                </Form.Group>
            </FormContainer>
        )
    }
}

export default Register;