import React, { Component } from 'react';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import axios from 'axios';
import Login from '../../components/Login/Login';

class LoginContainer extends Component {
    state = { 
        username: '', 
        password: '',
        redirect: false,
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        let data = {
            user: {
                username,
                password
            }
        }
        await axios.get('http://localhost:3000/user/login', data)
            .then((response) => {
                if (response.status === 200) {
                    // Store keys, set logged in
                    console.log(response);
                    this.setState({ redirect: true });
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleTextChange = (e, field) => {
        this.setState({[field]: e.target.value})
    }

    render () {
        return (
            <FormContainer>
                <Login onFormSubmit={this.handleFormSubmit} onTextChange={this.handleTextChange}/>
            </FormContainer>
        );
    }
}

export default LoginContainer;