import React from 'react';
import {Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const inSessionNavbar = (props) => (
    <div className="Right">
        <span className="UserText">Welcome {props.username}!</span>
        <NavLink to="/home">
            <Button color="violet">Go to Pokedex!</Button>
        </NavLink>
        <NavLink to="/profile">
            <Button color="blue">
                <i className="user icon"></i>
                Profile
            </Button>
        </NavLink>
        <NavLink to="/settings">
            <Button color="blue">
                <i className="cog icon"></i>
                Settings
            </Button>
        </NavLink>
        <NavLink to="/logout">
            <Button color="red">
                <i className="sign out alternate icon"></i>
                Logout
            </Button>
        </NavLink>
    </div>
)

const noSessionNavbar = () => (
    <div className="Right">
        <NavLink to="/login">
            <Button color="blue">Log in</Button>
        </NavLink>
        <NavLink to="register">
            <Button color="green">Register</Button>
        </NavLink>
    </div>
)

const navbar = ( props ) => {
    return (
        <div className="Navbar">
            <div className="LogoContainer">
                <h1>Pokedex</h1>
            </div>
            { 
                props.isLoggedIn ? inSessionNavbar(props) : noSessionNavbar()
            }
        </div>
    )
};

export default navbar;