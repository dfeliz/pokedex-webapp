import React, { Component } from 'react';
import { Container, Segment, Select } from 'semantic-ui-react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/UI/Modal/Modal';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal';
import RoundButton from '../../components/UI/RoundButton/RoundButton';
import ConfirmDelete from '../../components/UI/ConfirmDelete/ConfirmDelete';
import PokemonList from '../../components/Home/PokemonList/PokemonList';
import PokemonDetails from '../../components/Home/PokemonDetails/PokemonDetails';
import CatchContainer from './CatchContainer';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';
import '../../components/Home/Home.css';

const SORT_OPTIONS = [
    {key: 1, text: 'Name', value: 'alphabet'},
    {key: 2, text: 'Added (default)', value: 'added' },
    {key: 3, text: 'Catch date (newest first)', value: 'catchdaten'},
    {key: 4, text: 'Catch date (oldest first)', value: 'catchdateo'},
];

class HomeContainer extends Component {
    state = { 
        catching: false,
        viewingDetails: false,
        catches: [],
        selectedPokemon: null,
        deleting: false,
        showDeleteDialog: false,
    }

    componentDidMount() {
        this.fetchCatches();
    }

    handleCatchVisibility = () => {
        this.setState((prevState) => {
            return {
                catching: !prevState.catching 
            }
        })
        this.fetchCatches();
    }

    fetchCatches = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/catches`, {
            headers: {
                "Authorization" : window.localStorage.getItem('token'),
            }
        }).then((response) => {
            this.setState({ catches: response.data });
        }).catch((err) => {
            alert('Could not fetch your pokemon list');
            console.log(err);
        })
    }

    handlePokemonClick = (item) => {
        this.setState({ selectedPokemon: item });
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState((prevState) => {
            return {
                viewingDetails: !prevState.viewingDetails,
            }
        })
    }

    handlePokemonDelete = async () => {
        this.setState({ deleting: true });
        let id = this.state.selectedPokemon.catch_id;
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user/catches/${id}`, {
            headers: {
                "Authorization" : window.localStorage.getItem('token'),
            }
        }).then((response) => {
            alert('Successfully deleted');
            this.setState({ deleting: false });
            this.toggleModal();
            this.toggleDeleteDialog();
            this.fetchCatches();
        }).catch((err) => {
            alert(`Error: ${err}`);
            this.setState({ deleting: false });
        })
    }

    toggleDeleteDialog = async () => {
        this.setState((prevState) => {
            return {
                showDeleteDialog: !prevState.showDeleteDialog,
            }
        });
    }

    sortBy = (_, param) => {
        let list = this.state.catches;
        let newList;
        switch (param.value) {
            case 'alphabet':
                newList = list.sort((a,b) => (
                    a.pokemon.poke_name > b.pokemon.poke_name ? 1 : -1
                ));
            break;
            case 'catchdaten':
                newList = list.sort((a,b) => (
                    a.catch_date < b.catch_date ? 1 : -1
                ));
            break;
            case 'catchdateo':
                newList = list.sort((a,b) => (
                    a.catch_date > b.catch_date ? 1 : -1
                ));
            break;
            default:
                newList = list.sort((a,b) => (
                    a.catch_id > b.catch_id ? 1 : -1
                ));
            break;
        }
        console.log(list);
        console.log(newList);
        this.setState({ catches: newList });
    }
    
    render () {
        return(
            <Aux>
                <Modal show={this.state.catching} onBackdropClick={this.handleCatchVisibility}>
                    <CatchContainer 
                        onCatch={this.handleCatchVisibility} 
                    />
                </Modal>
                <Modal show={this.state.viewingDetails} onBackdropClick={() => this.toggleModal()}>
                    <PokemonDetails 
                        selectedPokemon={this.state.selectedPokemon} 
                        onPokemonDelete={this.toggleDeleteDialog}
                        deleting={this.state.deleting}
                    />
                </Modal>
                <ConfirmModal show={this.state.showDeleteDialog} onBackdropClick={() => this.toggleDeleteDialog()}>
                    <ConfirmDelete 
                        item={"Pokemon"} 
                        confirm={this.handlePokemonDelete} 
                        cancel={this.toggleDeleteDialog} 
                        selectedPokemon={this.state.selectedPokemon}
                    />
                </ConfirmModal>
                <Layout>
                    <div className="AddButtonSpace">
                        <RoundButton color="blue" onClick={this.handleCatchVisibility}><i className="large plus icon"></i></RoundButton>
                    </div>
                    <Container>
                        <Segment>
                            <h1>List</h1>
                            <div className="ui divider" />
                            <div id="SortDropdown">
                                <label>Sort by:</label>
                                <Select 
                                    options={SORT_OPTIONS} 
                                    onChange={this.sortBy}
                                    placeholder="Select an option"
                                />
                            </div>
                            <PokemonList 
                                fetchCatches={this.fetchCatches} 
                                catches={this.state.catches}
                                showDetails={this.handlePokemonClick}
                            />
                        </Segment>
                    </Container>
                </Layout>
            </Aux>
        )
    }
}

export default HomeContainer;