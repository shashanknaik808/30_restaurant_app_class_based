import React, { Component } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    

    render() {
        return (
            <div className='pri'>
                <div className='wrapper'>
                    <h1>Login Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        Username: <input type='text' name='username' id='username' /><br />
                        Password: <input type='password' name='password' id='password' /><br />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
