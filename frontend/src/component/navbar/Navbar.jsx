import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Navbar.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        console.log('Form data submitted:\nUsername:', username, '\nPassword:', password);
    }


    render() {
        return (
            <div className='pri'>
                <div className='wrapper'>
                    <h1>Login Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='container'>
                            <label htmlFor="username"><b>Username</b></label>
                            <input
                                type='text'
                                name='username'
                                id='username'
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                required
                            />
                            <label htmlFor="password"><b>Password</b></label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                            <input type='submit' value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Navbar;