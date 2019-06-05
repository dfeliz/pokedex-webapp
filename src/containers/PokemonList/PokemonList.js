import React, { Component } from 'react';
import axios from 'axios';

class PokemonList extends Component {
    state = {
        pokemons: [],
    };

    async componentDidMount() {
        await axios.get('http://localhost:3000/user/pokemons', {
            headers: {
                'Authorization' : `${window.localStorage.getItem('token')}`
            }
        })
    }

    // fetch list

    // map data

    // return list of pokemons

    render () {
        return (
            <div></div>
        );
    }
}

export default PokemonList;