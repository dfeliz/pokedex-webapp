import React, { Component } from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import { Grid } from 'semantic-ui-react';
import './PokemonList.css';

class PokemonList extends Component {
    render () {
        const {catches} = this.props;
        const pokemonList = catches.map((item) => {
            return <PokemonItem item={item} key={item.catch_id} showDetails={this.props.showDetails}/>
        })

        return (
            <div className="PokemonList">
                <Grid relaxed columns={6}>
                    {pokemonList}
                </Grid>
            </div>
        );
    }
}

export default PokemonList;