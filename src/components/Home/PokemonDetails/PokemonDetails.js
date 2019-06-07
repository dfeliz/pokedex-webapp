import React from 'react';
import './PokemonDetails.css';
import MyGoogleMap from '../GoogleMap/MyGoogleMap';
import { Button } from 'semantic-ui-react';

const pokemonDetails = ( props ) => {
    let Catch = props.selectedPokemon;
    return (
        <div className="SelectedPokemonContainer">
            <h1>Pokemon Details</h1>
            <div className="ui divider" />
            <h2>{Catch.pokemon.poke_name}</h2>
            <img src={Catch.pokemon.poke_image} alt="Selected pokemon img"/>
            <p>Catched on: {Catch.catch_date}</p>
            <p>Catched at:</p>
            <MyGoogleMap 
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCn0rnxFruFEPQRu7uenBmJX7xTt6vD4tw&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                onClick={() => {}}
                mapCoordX={parseFloat(Catch.catch_location_x)}
                mapCoordY={parseFloat(Catch.catch_location_y)}
            />
            {
                props.deleting ? <Button disabled loading id="RemoveButton" color="red" fluid>Remove from pokedex</Button> : <Button onClick={props.onPokemonDelete} id="RemoveButton" color="red" fluid>Remove from pokedex</Button>
            }
        </div>
    );
}

export default pokemonDetails;