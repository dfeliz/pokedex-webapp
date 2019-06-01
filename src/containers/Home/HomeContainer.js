import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Segment } from 'semantic-ui-react';
import RoundButton from '../../components/UI/RoundButton/RoundButton';
import PokemonList from '../../containers/PokemonList/PokemonList';
import Aux from '../../hoc/Aux/Aux';
import '../../components/Home/Home.css';

class HomeContainer extends Component {
    
    componentDidMount() {
        // fetch catches data
    }

    onCatchClick = () => {
        // show modal in backdrop
    }
    
    render () {
        return(
            <Aux>

                <Layout>
                    <div className="AddButtonSpace">
                        <RoundButton color="blue" onClick={this.onCatchClick}><i className="large plus icon"></i></RoundButton>
                    </div>
                    <Container>
                        <Segment>
                            <h1>List</h1>
                            <hr></hr>
                            <PokemonList />
                        </Segment>
                    </Container>
                </Layout>
            </Aux>
        )
    }
}

export default HomeContainer;