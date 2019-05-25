import React, { Component } from 'react';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import axios from 'axios';
import Register from '../../components/Register/Register';

const GENDER_OPTIONS = [
    {key: 'm', text: 'Male', value: 'm'},
    {key: 'f', text: 'Female', value: 'f'},
    {key: 'o', text: 'Other', value: 'other'},
]

class RegisterContainer extends Component {
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

    handleTextChange = (event, field) => { 
        this.setState({[field]: event.target.value});
    }

    handleSelectChange = (_, data) => {
        this.setState({ gender: data.value });
    }

    handleFormSubmit = async (event) => {
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
                <Register 
                    genderOptions={GENDER_OPTIONS} 
                    onFormSubmit={this.handleFormSubmit} 
                    onTextChange={this.handleTextChange} 
                    onSelectChange={this.handleSelectChange} 
                    />
            </FormContainer>
        )
    }
}

export default RegisterContainer;