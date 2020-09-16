import React from 'react';
import { connect } from 'react-redux';
import { Route,Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) =>
{
 return (
    <Route {...rest} component ={(props) =>
    {
        return (
            isAuthenticated ? 
            (<Redirect to="/dashboard" />)
            :
            (<Component {...props} />)
            );
    }} />
);
};

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid
});

const connectedPublicRoute = connect(mapStateToProps)(PublicRoute);
export default connectedPublicRoute;

