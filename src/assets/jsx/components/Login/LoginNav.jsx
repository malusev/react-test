import React, { Component } from 'react';

export default class LoginNav extends Component {
    render () {
        return (
            <div className="login-nav">                 
                <ul className="menu">
                    <li><span>Home</span></li>
                    <li><span>Support</span></li>
                    <li><span>Docs</span></li>
                    <li><span>Privacy Policy</span></li>
                    <li><span>Terms of service</span></li>
                </ul>
            </div>
        )
    }    
}