import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
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