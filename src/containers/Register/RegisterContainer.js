import React, { Component } from 'react';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import axios from 'axios';
import Register from '../../components/Register/Register';

const GENDER_OPTIONS = [
    {key: 'm', text: 'Male', value: 1},
    {key: 'f', text: 'Female', value: 2},
    {key: 'o', text: 'Other', value: 3},
]

class RegisterContainer extends Component {
    state = {
        name: "",
        lastname: "",
        birthdate: "",
        city: "",
        email: "",
        gender: null,
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

        let formIsValid = this.handleFormValidation();

        if (formIsValid) {
            this.setState({loading: true});
            let data = {
                user: {
                    user_name: this.state.name,
                    user_lastname: this.state.lastname,
                    user_birthdate: this.state.birthdate,
                    user_city: this.state.city,
                    gender_id: this.state.gender,
                    user_username: this.state.username,
                    user_email: this.state.email,
                    user_password: this.state.password,
                    user_picture: "",
                }
            }

            await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/register`, data, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response) => {
                if (response.statusText === "Error") {
                    alert(response.data.response);
                    this.setState({loading: false});
                }
                else {
                    this.setState({redirect: true});
                }
            }).catch((err) => {
                alert(err);
                this.setState({loading: false});
            });
        }
    }

    render () {
        return (
            <FormContainer title="Register">
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