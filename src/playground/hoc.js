//Higher Order Component (HOC) -- a component that renders another component
//reuse code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>
{
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info.please dont share!</p>}
        <WrappedComponent {...props}/>
        </div>
        );
};

//requireAuthentication

const requireAuthentication = (WrappedComponent) =>
{
    return (props) => (
        <div>
        { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>please login to view the info!</p>  }
        </div>
        );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info = 'this is information'/>,document.getElementById('app'));