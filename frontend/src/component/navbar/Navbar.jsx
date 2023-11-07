import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Shashank',
            password: 'sak',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log('Input changed:', event.target.name, event.target.value);
    }

    componentDidMount() {
        console.log('Navbar component mounted');
    }

    render() {
        return (
            <div className='navbar-container dark-mode'>
                <div className='logo'><h3>Heaven's Kitchen</h3></div>
                <div className='buttons'>
                    <Link to="/login">
                        Login
                    </Link>
                    <br />
                    <Link to="/restaurant">
                        Restaurant
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
