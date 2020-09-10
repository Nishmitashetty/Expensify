import React from 'react';
import ReactDOM from 'react-dom'

const Info=(props)=> (
    <div>
    <h1>info</h1>
    <p> the info is {props.info}</p></div>
)


const withAdminWarning=(WrappedComponent)=>{
return (props)=>(
<div>
{props.isAdmin && <p>This is private info, please dont share</p>}
<WrappedComponent {...props} />
</div>
)
}


const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
    <div>
    {props.isAuthenticated ? (<div> <WrappedComponent {...props}/> </div> ): (<p> please login</p>) }
  
    </div>
    )
    }

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is info" isAdmin={true} />, document.getElementById('app'));
