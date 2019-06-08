import React, {Component} from 'react';
import Pokedex from './containers/Pokedex/PokedexContainer';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail'
import LoggedInContext from '../src/helpers/Context/context';
import Register from './containers/Register/RegisterContainer';
import Login from './containers/Login/LoginContainer';
import err404 from './components/Error404/err404';
import Activate from './containers/Activate/Activate';
import PokedexApi from './api/pokedex';
import Home from './containers/Home/HomeContainer';
import Profile from './containers/Profile/ProfileContainer';
import Logout from './containers/Logout/LogoutContainer';
import ForgotPassword from './containers/ForgotPassword/ForgotPasswordContainer';
import ResetPassword from './containers/ResetPassword/ResetPasswordContainer';
import './App.css';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={ (props) => (
    isLoggedIn === true ? <Component {...props} /> : <Redirect to='/login' /> 
  )} />
)

const GuestRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={ (props) => (
    isLoggedIn === false ? <Component {...props} /> : <Redirect to='/home' /> 
  )} />
)

class App extends Component {
  state = { isLoggedIn: false, username: '' };

  async componentDidMount() {
    let token = window.localStorage.getItem("token");
    let user = window.localStorage.getItem("user");
    if (token !== undefined) {
      let data = {
        token: token,
        username: user,
      }
      let response = await PokedexApi.verifyUser(data);
      window.localStorage.setItem("user", response.username);
      this.setState({ isLoggedIn: response.exists, username: response.username })
    }
  }

  render() {
    return (
      <LoggedInContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, username: this.state.username }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Pokedex} exact/>
            <GuestRoute path="/login" isLoggedIn={this.state.isLoggedIn} component={Login} exact/>
            <GuestRoute path="/register" isLoggedIn={this.state.isLoggedIn} component={Register} exact/>
            <GuestRoute path="/confirm-email" isLoggedIn={this.state.isLoggedIn} component={ConfirmEmail} exact/>
            <GuestRoute path="/activate" isLoggedIn={this.state.isLoggedIn} component={Activate} />
            <GuestRoute path="/forgot-password" isLoggedIn={this.state.isLoggedIn} component={ForgotPassword} exact/>
            <GuestRoute path="/reset-password" isLoggedIn={this.state.isLoggedIn} component={ResetPassword} />
            <GuestRoute path="/email-sent" isLoggedIn={this.state.isLoggedIn} component={ConfirmEmail} exact />
            <PrivateRoute path="/logout" isLoggedIn={this.state.isLoggedIn} component={Logout} exact/>
            <PrivateRoute path="/home" isLoggedIn={this.state.isLoggedIn} component={Home} exact/>
            <PrivateRoute path="/profile" isLoggedIn={this.state.isLoggedIn} component={Profile} exact/>
            <Route component={err404}/>
          </Switch>
        </BrowserRouter>
      </LoggedInContext.Provider>
    );
  }
}

export default App;
