import React, { Component } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Shashank',
            password: 'sak',
            errorMessage: '', // Add an error message state
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;

        if (username === 'Shashank' && password === 'sak') {
            console.log('Login successful');
        } 
        
        else {
            console.log('Login failed');
            this.setState({
                errorMessage: 'Incorrect username or password', // Set an error message
            });
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            errorMessage: '',
        });
    }

    render() {
        return (
            <div className='pri'>
                <div className='wrapper'>
                    <h1>Login Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.errorMessage && (
                            <div className="error-message">{this.state.errorMessage}</div>
                        )}
                        Username:
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        /><br />
                        Password:
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        /><br />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
