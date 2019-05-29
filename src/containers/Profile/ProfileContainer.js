import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import Layout from '../../components/Layout/Layout';

class ProfileContainer extends Component {


    render () {
        return (
            <Layout>
                <Profile />
            </Layout>
        );
    }
}

export default ProfileContainer;