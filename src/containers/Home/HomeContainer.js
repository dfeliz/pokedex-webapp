import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
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
        await axios.get('http://localhost:3000/user/catches', {
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
        console.log(item);
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
        await axios.delete(`http://localhost:3000/user/catches/${id}`, {
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
                            <PokemonList fetchCatches={this.fetchCatches} catches={this.state.catches} showDetails={this.handlePokemonClick}/>
                        </Segment>
                    </Container>
                </Layout>
            </Aux>
        )
    }
}

export default HomeContainer;