import React, { Component } from 'react';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import axios from 'axios';

class ForgotPasswordContainer extends Component {
    state = { email: '' };

    onFormSubmit = () => {
        let email = this.state.email;
        let data = {
            email: email
        }
        axios.post("http://localhost:3000/user/forgotpassword", data)
            .then((response) => {
                console.log(response);
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
                />
            </FormContainer>
        );
    }
}

export default ForgotPasswordContainer;