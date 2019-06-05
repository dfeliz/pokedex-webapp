import React, { Component } from 'react';
import Catch from '../../components/Home/Catch/Catch';
import axios from 'axios';

class CatchContainer extends Component {
    state = {
        errors: [],
        selectedPokemon: null,
        catchdate: null,
        loading: false,
        mapCoordX: 18.45677765242441,
        mapCoordY: -69.96347798782966,
        options: [
            {key: 'Loading', text: 'Loading', value: '1'}
        ]
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/pokemon/');
        let extract = response.data;
        let options = [];
        extract.map((item) => {
            options.push({
                key: item.poke_name,
                text: item.poke_name[0].toUpperCase() + item.poke_name.slice(1),
                value: item.poke_id,
            })
        })
        this.setState({ options: options });
    }

    handleSelectChange = (_, data) => {
        let pokemon = data.value;
        this.setState({ selectedPokemon: pokemon })
    }

    handleLocationSelect = (event) => {
        this.setState({ mapCoordX: event.latLng.lat(), mapCoordY: event.latLng.lng()})
    }

    handleTextChange = (e, field) => {
        this.setState({[field]: e.target.value})
    }

    handleSubmit = async () => {
        this.setState({ loading: true });
        const {mapCoordX, mapCoordY, catchdate, selectedPokemon} = this.state;
        let data = {
            catch_location_x: mapCoordX,
            catch_location_y: mapCoordY,
            catch_date: catchdate,
            user_username: window.localStorage.user,
            poke_id: selectedPokemon,
        }
        try {
            await axios.post('http://localhost:3000/catch/', data)
        }
        catch (err) {
            console.log(err);
            alert('An error has ocurred catching your pokemon');
            this.setState({ loading: false });
        }
        this.setState({ loading: false });
        alert(`Pokemon added to your pokedex!`);
        this.props.onCatch();
    }

    render () {
        return (
            <Catch 
                onSubmit={this.handleSubmit}
                onSelectChange={this.handleSelectChange}
                onTextChange={this.handleTextChange}
                pokemons={this.state.options}
                onClick={this.handleLocationSelect}
                mapCoordX={this.state.mapCoordX}
                mapCoordY={this.state.mapCoordY}
                loading={this.state.loading}
                />
        )
    }
}

export default CatchContainer;