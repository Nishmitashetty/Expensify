import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

export class LoginPage extends React.Component
{
    render()
    {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control</p>
                <button
                onClick={this.props.startLogin}
                className="button"
                 >Login with Google</button>
                {/* <button
                onClick={this.props.startLogin2} 
                className="button--fb"
                 >Login with Facebook</button> */}
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) =>({
    startLogin:() => dispatch(startLogin()),
   // startLogin2:() => dispatch(startLogin2())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);