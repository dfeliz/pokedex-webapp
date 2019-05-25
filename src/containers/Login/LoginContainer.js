import React, { Component } from 'react';
import FormContainer from '../../hoc/FormContainer/FormContainer';
import Login from '../../components/Login/Login';

class LoginContainer extends Component {
    state = {  }

    onFormSubmit = () => {

    }

    onTextChange = () => {

    }

    render () {
        return (
            <FormContainer>
                <Login />
            </FormContainer>
        );
    }
}

export default LoginContainer;