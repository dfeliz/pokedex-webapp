import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import EditProfile from '../../components/Profile/EditProfile';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { Container, Segment } from 'semantic-ui-react';

const GENDER_OPTIONS = [
    {key: 'm', text: 'Male', value: 1},
    {key: 'f', text: 'Female', value: 2},
    {key: 'o', text: 'Other', value: 3},
]

class ProfileContainer extends Component {
    state = { 
        userData: {
            user_name: "",
            user_lastname: "",
            user_birthdate: "",
            user_city: "",
            user_email: "",
            user_username: "",
            gender: {
                gender_name: ""
            },
            gender_id: null,
        },
        editing: false,
        loading: false,
    }

    componentDidMount() {
        this.fetchProfile();
    }

    fetchProfile = async () => {
        await axios.get("http://localhost:3000/user/profile", {
            headers: {
                "Authorization" : window.localStorage.getItem('token'),
            }
        }).then((response) => {
            this.setState({ userData: response.data[0]});
        })
    }

    updateProfile = async () => {
        this.setState({ loading: true });
        let data = {
            user_name: this.state.userData.user_name,
            user_lastname: this.state.userData.user_lastname,
            user_birthdate: this.state.userData.user_birthdate,
            user_city: this.state.userData.user_city,
            user_email: this.state.userData.user_email,
            gender_id: this.state.userData.gender_id
        }
        await axios.post("http://localhost:3000/user/profile/update", data, {
            headers: {
                "Authorization" : window.localStorage.getItem('token'),
            }
        }).then((response) => {
            if (response.statusText === "Error") {
                alert("Couldn't update your profile data, error: " + response);
                this.setState({ loading: false });
            }
            else {
                alert("Successfully updated your profile details!");
                this.toggleEditMode();
                this.fetchProfile();
                this.setState({ loading: false });
            }
        }).catch((err) => {
            alert(err);
            this.setState({ loading: false });
        })
    }

    handleTextChange = (event, field) => { 
        const updatedUserdata = {
            ...this.state.userData,
            [field] : event.target.value
        }
        this.setState({ userData : updatedUserdata});
    }

    enterEditMode = () => {
        this.toggleEditMode();
        const backup = {
            ...this.state.userData
        }
        this.setState({ backup : backup });

        
    }

    cancelEditMode = () => {
        this.toggleEditMode();
        this.setState((prevState) => {
            return { 
                userData: prevState.backup,
                backup: null, 
            } 
        });
    }

    toggleEditMode = () => {
        this.setState((prevState) => {
            return {
                editing: !prevState.editing,
            }
        })
    }

    render () {
        let editMode = this.state.editing;
        return (
            <Layout>
                <Container>
                    <Segment>
                        <h1>Profile</h1>
                        <div className="ui divider" />
                        {
                            editMode ? <EditProfile 
                                            cancelEditMode={this.cancelEditMode}
                                            onUpdate={this.updateProfile} 
                                            genderOptions={GENDER_OPTIONS} 
                                            userData={this.state.userData}
                                            handleTextChange={this.handleTextChange}
                                            loading={this.state.loading}
                                        /> 
                                        : 
                                        <Profile 
                                            userData={this.state.userData} 
                                            enterEditMode={this.enterEditMode} 
                                        />
                        }
                    </Segment>
                </Container>
            </Layout>
        );
    }
}

export default ProfileContainer;