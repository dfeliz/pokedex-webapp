import React from 'react';

const loggedInContext = React.createContext({
    isLoggedIn: false,
    username: '',
})

export default loggedInContext;