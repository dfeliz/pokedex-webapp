import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import ResetPasswordValid from '../../components/ResetPasssword/Valid';
import ResetPasswordNotValid from '../../components/ResetPasssword/NotValid';
import { Container, Segment } from 'semantic-ui-react';


class ResetPasswordContainer extends Component {
    state = {
        resetPasswordValid: false,
        email: '',
        password: '',
        confirmPassword: '',
        redirect: false,
        loading: false,
    };

    async componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        if (values.code !== undefined && values.email !== undefined) {
            let data = {
                hash: values.code,
                email: values.email,
            }
            this.setState({ email: values.email });
            await axios.post("http://localhost:3000/user/checkresetpassword", data)
                .then((response) => {
                    if (response.statusText === "Success") {
                        this.setState({ resetPasswordValid: true});
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                
        }
    }

    onFormSubmit = async () => {
        this.setState({ loading: true });
        const {password, confirmPassword, email} = this.state;
        let valid = this.validateEqual(password, confirmPassword);
        if (valid === true) {
            let data = {
                newPassword: password,
                email: email,
            }
            await axios.post("http://localhost:3000/user/resetpassword", data)
                .then((response) => {
                    console.log(response);
                    alert('Password changed correctly!');
                    this.setState({ redirect: true });
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ loading: false });
                })
    
        }
        else {
            this.setState({ loading: false });
            alert("Passwords aren't the same");
        }
    }

    onTextChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    validateEqual = (password, confirmPassword) => {
        if (password === confirmPassword) {
            return true;
        }
        return false;
    }

    render () {
        return (
            <Container style={{marginTop: '20px', width:'600px'}}>
                <Segment>
                    <h1>Reset password</h1>
                    <hr></hr>
                    { 
                        this.state.resetPasswordValid ? 
                        <ResetPasswordValid 
                            onTextChange={this.onTextChange} 
                            onFormSubmit={this.onFormSubmit}
                            redirect={this.state.redirect}
                            loading={this.state.loading}
                            /> 
                        : <ResetPasswordNotValid />
                    }
                </Segment>
            </Container>
        );
    }
}

export default ResetPasswordContainer;