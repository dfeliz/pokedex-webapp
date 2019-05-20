import React from 'react'
import Layout from './components/Layout/Layout'
import PokedexContainer from './containers/PokedexContainer'

const Pokedex = ( props ) => {
    return (
        <Layout>
            <PokedexContainer />
        </Layout>
    );
};

export default Pokedex;