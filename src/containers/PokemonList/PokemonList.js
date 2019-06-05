import React, { Component } from 'react';
import PokemonItem from '../../components/Home/PokemonItem/PokemonItem';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

class PokemonList extends Component {
    render () {
        const {catches} = this.props;
        const pokemonList = catches.map((item) => {
            return <PokemonItem item={item} key={item.catch_id}/>
        })

        return (
            <Grid relaxed columns={6}>
                {pokemonList}
            </Grid>
        );
    }
}

export default PokemonList;