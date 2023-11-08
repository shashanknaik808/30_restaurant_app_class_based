import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        const user = {
            username,
            password,
        };

        const backend_url = 'http://localhost:3200/login';
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        };

        try {
            fetch(backend_url, options)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.flag === true) {
                        window.location.href = '/restaurant';
                    }
                    else {
                        this.setState({ errorMessage: responseData.msg });
                    }
                })
                .catch((error) => {
                    console.error('API call error:', error);
                });
        } catch (error) {
            console.error('API call error:', error);
        }
    }

    render() {
        return (
            <div className='pri'>
                <div className='wrapper'>
                    <h1>Login Form</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className='container'>
                            <label htmlFor="username"> <b>Username</b></label>
                            <input type="text" name='username' id='username' required />

                            <label htmlFor="password"> <b>Password</b></label>
                            <input type="password" name='password' id='password' required />

                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
