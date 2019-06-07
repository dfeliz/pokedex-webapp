import React, { Component } from 'react';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import axios from 'axios';

class ForgotPasswordContainer extends Component {
    state = {
        email: '',
        loading: false,
        emailSent: false,
    };

    onFormSubmit = () => {
        this.setState({ loading: true })
        let email = this.state.email;
        let data = {
            email: email
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/forgotpassword`, data)
            .then((response) => {
                console.log(response);
                if (response.statusText === "Error") {
                    alert(response.data.response);
                    this.setState({loading: false});
                }
                else {
                    this.setState({ emailSent: true });
                }
            })
            .catch((err) => {
                this.setState({ loading: false });
                console.log(err);
                alert(err);
            })
    }

    onChange = (e) => {
        this.setState({ email: e.target.value })
    }

    render () {
        return(
            <FormContainer title="Forgot password">
                <ForgotPassword 
                    onFormSubmit={this.onFormSubmit}
                    onChange={this.onChange}
                    loading={this.state.loading}
                    emailSent={this.state.emailSent}
                />
            </FormContainer>
        );
    }
}

export default ForgotPasswordContainer;