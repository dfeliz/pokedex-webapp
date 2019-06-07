import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import './PokemonItem.css';



const pokemonItem = ( props ) => {
    const pokemon = props.item;
    return (
        <Grid.Column>
            <div className="PokemonItemContainer" onClick={() => props.showDetails(pokemon)}>
                <Image centered src={props.item.pokemon.poke_image} />
                <span>{props.item.pokemon.poke_name}</span>
                <p className="CatchedLabel">Caught on:</p>
                <p>{props.item.catch_date}</p>
            </div>
        </Grid.Column>
    )
};

export default pokemonItem;