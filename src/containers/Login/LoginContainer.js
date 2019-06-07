import React, { Component } from 'react';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import {withRouter} from 'react-router-dom';
import Login from '../../components/Login/Login';
import axios from 'axios';

class LoginContainer extends Component {
    state = { 
        username: '', 
        password: '',
        loading: false,
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        this.setState({loading: true});
        let {username, password} = this.state;
        let data = {
            user: {
                username,
                password
            }
        }
        await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/login`, data)
            .then((response) => {
                if (response.statusText === "Success") {
                    window.localStorage.setItem("token", response.data.token);
                    window.localStorage.setItem("user", response.data.username);
                    window.location.href="/";
                }
                else {
                    console.log(response);
                    this.setState({ loading: false });
                    alert(response.data.response);
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false })
                alert('Could not connect to server, please try again later');
            })
    }

    handleTextChange = (e, field) => {
        this.setState({[field]: e.target.value})
    }

    render () {
        return (
            <FormContainer title="Login">
                <Login 
                    onFormSubmit={this.handleFormSubmit} 
                    onTextChange={this.handleTextChange}
                    redirect={this.state.redirect}
                    loading={this.state.loading}
                    />
            </FormContainer>
        );
    }
}

export default withRouter(LoginContainer);