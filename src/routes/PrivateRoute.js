import {Route, Redirect} from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={ (props) => (
      isLoggedIn === true ? <Component {...props} /> : <Redirect to='/login' /> 
    )} />
  )

export default PrivateRoute;