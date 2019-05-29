import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Home from '../../components/Home/Home';


class HomeContainer extends Component {

    
    render () {
        return(
            <Layout>
                <Home />
            </Layout>
        )
    }
}

export default HomeContainer;