import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
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

export default Navbar;