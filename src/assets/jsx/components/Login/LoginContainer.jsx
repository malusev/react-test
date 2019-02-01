import React, { Component } from 'react';
import LoginNav from './LoginNav';
import Login from './Login';
import LoginLogo from './LoginLogo';

export default class LoginContainer extends Component {
    nesto = () => {

    }
    render () {
        return (
            <div className="login-container" para={this.nesto}> 
                <LoginLogo />
                <Login />
                <LoginNav />
            </div>
        )
    }    
}