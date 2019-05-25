import React from 'react';
import Pokedex from './Pokedex';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './containers/Register/Register';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail'
import Login from './containers/Login/Login';
import err404 from './containers/Error404/err404';
// import Register from './containers/'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pokedex} exact/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route path="/confirm-email" component={ConfirmEmail} />
        <Route component={err404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
