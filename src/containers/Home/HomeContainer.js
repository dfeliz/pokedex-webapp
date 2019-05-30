import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Segment } from 'semantic-ui-react';
import RoundButton from '../../components/UI/RoundButton/RoundButton';
import HomeBody from '../../components/Home/Home';
import PokemonList from '../../containers/PokemonList/PokemonList';
import Aux from '../../hoc/Aux/Aux';


class HomeContainer extends Component {
    // fetch user data ?
    
    render () {
        return(
            <Aux>

                <Layout>
                    <div className="AddButtonSpace">
                        <RoundButton color="blue"><i className="large plus icon"></i></RoundButton>
                    </div>
                    <Container>
                        <Segment>
                            <HomeBody />
                            <PokemonList />
                        </Segment>
                    </Container>
                </Layout>
            </Aux>
        )
    }
}

export default HomeContainer;