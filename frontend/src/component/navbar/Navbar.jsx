import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container dark-mode'>
                <div className='logo'>Heaven's Kitchen</div>
                <div className='buttons'>
                    <Link to="/login">
                        <button className='nav-button'>Login</button>
                    </Link>
                    <br />
                    <Link to="/restaurant">
                        <button className='nav-button'>Restaurant</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
