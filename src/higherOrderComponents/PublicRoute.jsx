import React from 'react'
import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PublicRoute({ component: Component, restricted, ...rest }) {

    const { isauth, user,role } = useContext(AuthContext)

    return (
        <Route {...rest} render={props => (
            isauth && restricted ?
                role === 'Docteur' && '/home'
                ||
                role === 'Client' && '/home'
                ||
                role === 'Patient' && '/home'
                ||
                role && '/'
                : <Component {...props} />
        )} />)
}
export default PublicRoute
