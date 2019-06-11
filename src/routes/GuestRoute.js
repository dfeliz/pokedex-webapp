import {Route, Redirect} from 'react-router-dom';
import React from 'react';

const GuestRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={ (props) => (
      isLoggedIn === false ? <Component {...props} /> : <Redirect to='/home' /> 
    )} />
  )

export default GuestRoute;