import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <div className="login-form"> 
                <form>
                    <div className="form-input-field">
                        <input autoComplete="email" type="email" name="email" class="input"/>
                        <label className='form-label-field label'>Email</label>
                    </div>
                    <div className="form-input-field">
                        <input autoComplete="new-password" tabIndex="0" type="password"  class="input"/>
                        <label className='form-label-field label'>Password</label>
                    </div>
                    <button className="btn login-btn">LOGIN</button>
                    <p>Forgot password?</p>
                </form>
            </div>
        )
    }    
}