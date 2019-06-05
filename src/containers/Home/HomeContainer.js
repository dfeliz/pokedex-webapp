import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Segment } from 'semantic-ui-react';
import RoundButton from '../../components/UI/RoundButton/RoundButton';
import PokemonList from '../../containers/PokemonList/PokemonList';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import CatchContainer from './CatchContainer';
import '../../components/Home/Home.css';

class HomeContainer extends Component {
    state = { 
        catching: false
    }


    componentDidMount() {
        // fetch catches data
    }

    handleCatchVisibility = () => {
        this.setState((prevState) => {
            return {
                catching: !prevState.catching 
            }
        })
    }
    
    render () {
        return(
            <Aux>
                <Modal show={this.state.catching} onBackdropClick={this.handleCatchVisibility}>
                    <CatchContainer onCatch={this.handleCatchVisibility}/>
                </Modal>
                <Layout>
                    <div className="AddButtonSpace">
                        <RoundButton color="blue" onClick={this.handleCatchVisibility}><i className="large plus icon"></i></RoundButton>
                    </div>
                    <Container>
                        <Segment>
                            <h1>List</h1>
                            <div className="ui divider" />
                            <PokemonList />
                        </Segment>
                    </Container>
                </Layout>
            </Aux>
        )
    }
}

export default HomeContainer;