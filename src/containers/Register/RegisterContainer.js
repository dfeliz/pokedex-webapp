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
        repeatedPassword: "",
        redirect: false,
        loading: false,
    }

    handleTextChange = (event, field) => { 
        this.setState({[field]: event.target.value});
    }

    handleSelectChange = (_, data) => {
        this.setState({ gender: data.value });
    }

    handleFormValidation = () => {
        let pw = this.state.password;
        let confirmpw = this.state.repeatedPassword;

        if (pw.length <= 7) {
            alert('Password must have at least 8 characters');
        }
        else {
            if (pw === confirmpw) {
                return true;
            }
            else {
                alert('Passwords dont match');
                return false;
            }
        }
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true});
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

        let formIsValid = this.handleFormValidation();

        if (formIsValid) {
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
                //TODO: Better error handling
                alert('User or email already exists in database');
                this.setState({loading: false});
            });
        }
    }

    render () {
        return (
            <FormContainer>
                <Register 
                    genderOptions={GENDER_OPTIONS} 
                    onFormSubmit={this.handleFormSubmit} 
                    onTextChange={this.handleTextChange} 
                    onSelectChange={this.handleSelectChange}
                    redirect={this.state.redirect}
                    loading={this.state.loading}
                    />
            </FormContainer>
        )
    }
}

export default RegisterContainer;