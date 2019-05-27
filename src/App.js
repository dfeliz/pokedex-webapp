import React from 'react';
import Pokedex from './Pokedex';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail'
import Register from './containers/Register/RegisterContainer';
import Login from './containers/Login/LoginContainer';
import err404 from './components/Error404/err404';
import Activate from './containers/Activate/Activate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pokedex} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/confirm-email" component={ConfirmEmail} exact/>
        <Route path="/activate" component={Activate} />
        <Route component={err404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
