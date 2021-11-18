import React from 'react';
import { Redirect, Route } from 'react-router';
import Login from '../components/Login/Login';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){return<Login/>}
    return (
         <Route
         {...rest}
         render={({ location }) =>
           user.email ? (
             children
           ) : (
             <Redirect
               to={{
                 pathname: "/login",
                 state: { from: location }
               }}
             />
           )
         }
       />
        
    );
};

export default PrivateRoute;