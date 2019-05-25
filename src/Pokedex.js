import React, {Component} from 'react'
import Layout from './components/Layout/Layout'
import PokedexContainer from './containers/Pokedex/PokedexContainer'

class Pokedex extends Component {
    render() {
        return (
            <Layout>
                <PokedexContainer />
            </Layout>
        );
    }
};

export default Pokedex;